import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Filter,
  SearchIconWrapper,
  SearchHolder,
  SearchIcon,
  SearchInput,
  PreviewWrapper,
  TextHolder,
  Image,
  ImageDescription
} from "./search.styles";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (search === "") {
      setSearchResults([]);
      return;
    }

    clearTimeout(timer);
    const timeoutId = setTimeout(() => {
      axios
        .post("http://localhost:5000/products/search", {
          query: search
        })
        .then(products => {
          setSearchResults(products.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, 1000);
    setTimer(timeoutId);
  }, [search]);

  return (
    <Filter>
      <SearchIconWrapper>
        <SearchHolder>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={onSearchChange}
          />
        </SearchHolder>
      </SearchIconWrapper>
      {searchResults.length > 0 && (
        <PreviewWrapper>
          {searchResults.map((product, index) => {
            return (
              <TextHolder
                onClick={onProductSelect}
                to={`/product-details/${product.itemNo}`}
                key={index}
              >
                <Image icon={`/${product.imageUrls[0]}`} />
                <ImageDescription>{product.name}</ImageDescription>
              </TextHolder>
            );
          })}
        </PreviewWrapper>
      )}
    </Filter>
  );

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function onProductSelect() {
    setSearchResults([]);
    setSearch("");
  }
};
