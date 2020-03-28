import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import search from "./search.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";
import { NavLink } from "react-router-dom";

export const Search = props => {
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
                <Image icon={product.imageUrls[0]} />
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

const Filter = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 280px;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid black;
  text-align: end;

  ::placeholder {
    color: black;
  }

  :focus {
    outline: none;
  }

  ${mediaMobile(`
    display: none;
  `)}
`;

const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchHolder = styled.div`
  display: flex;
`;
const PreviewWrapper = styled.div`
  max-height: 500px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25px;
  z-index: 2;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: scroll;
  cursor: pointer;
`;

const TextHolder = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 10px 15px;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  background-image: ${props => `url(${props.icon})`};
  background-size: cover;
`;

const ImageDescription = styled.span`
  font-size: 14px;
  margin-left: 10px;
  text-transform: capitalize;
`;
