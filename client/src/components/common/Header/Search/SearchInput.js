import React, {useEffect, useState} from "react";
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
import {MobileSearch} from "./MobileSearch/MobileSearch";
import {useComponentVisible} from "./utils";

export const Search = () => {
  const {ref, visible} = useComponentVisible(true);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mediaMatch = window.matchMedia("(max-width: 767px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const onMediaChange = mediaMatchEvent => {
      setMatches(mediaMatchEvent.matches);
    };
    mediaMatch.addListener(onMediaChange);

    return () => {
      mediaMatch.removeListener(onMediaChange);
    };
  });

  return (
    <Filter>
      <SearchIconWrapper>
        <SearchHolder>
          {matches ? (
            <SearchIcon onClick={() => setMobileMenuOpen(true)}/>
          ) : (
            <SearchIcon onClick={onSearch}/>
          )}
          {mobileMenuOpen && (
            <MobileSearch onClose={() => setMobileMenuOpen(false)}/>
          )}
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
                <Image icon={process.env.PUBLIC_URL + product.imageUrls[0]}/>
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

  function onSearch() {
    if (search === "") {
      setSearchResults([]);
      return;
    }

    axios
      .post("/products/search", {
        query: search
      })
      .then(products => {
        setSearchResults(products.data);
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
