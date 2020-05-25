import React, { useState } from "react";
import axios from "axios";
import { OverflowBody } from "../../../../Modal/modal.styles";
import {
  Holder,
  SearchClose,
  Wrapper,
  SearchIcon,
  SearchInput,
  Loaded,
  PreviewWrapper,
  TextHolder,
  Image,
  ImageDescription
} from "./mobileSearch.styles";

export const MobileSearch = props => {
  const { onClose } = props;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loaded, setLoaded] = useState(false);

  return (
    <Holder>
      <SearchClose onClick={onClose} />
      <Wrapper>
        <SearchIcon onClick={onSearch} />
        <SearchInput
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearchChange}
        />
      </Wrapper>
      {loaded && searchResults.length === 0 && (
        <Loaded>No items have been found</Loaded>
      )}
      {searchResults.length > 0 && (
        <PreviewWrapper>
          {searchResults.map((product, index) => {
            return (
              <TextHolder
                onClick={onProductSelect}
                to={`/product-details/${product.itemNo}`}
                key={index}
              >
                <Image icon={process.env.PUBLIC_URL + product.imageUrls[0]} />
                <ImageDescription>{product.name}</ImageDescription>
              </TextHolder>
            );
          })}
        </PreviewWrapper>
      )}
      <OverflowBody />
    </Holder>
  );

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function onSearch() {
    if (search.length < 3) {
      setSearchResults([]);
      return;
    }

    axios
      .post("/products/search", {
        query: search
      })
      .then(products => {
        setSearchResults(products.data);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function onProductSelect() {
    setSearchResults([]);
    setSearch("");
  }
};
