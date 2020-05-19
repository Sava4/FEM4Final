import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import close from "../../../../Modal/modalCloseBtn.png";
import search from "../search.png";
import {OverflowBody} from "../../../../Modal/modal.styles";

export const MobileSearch = props => {
  const { onClose } = props;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
      <OverflowBody/>
    </Holder>
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

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  background-color: white;
  transition: all 0.3s ease-in-out;
`;

export const SearchClose = styled.div`
  width: 18px;
  height: 18px;
  margin-top: 20px;
  margin-left: 20px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 20px 0 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #a7aabb;
`;

export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  font-family: inherit;
  text-align: center;

  ::placeholder {
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  :focus {
    outline: none;
  }
`;

export const PreviewWrapper = styled.div`
  flex: 1;
  overflow: auto;
  cursor: pointer;
`;

export const TextHolder = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 10px 15px;
`;

export const Image = styled.div`
  width: 80px;
  height: 70px;
  background-image: ${props => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ImageDescription = styled.span`
  font-size: 14px;
  margin-left: 20px;
  text-transform: capitalize;
`;
