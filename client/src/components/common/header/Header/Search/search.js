import React from "react";
import styled from "styled-components";

import search from "./search.png";
import { mediaMobile } from "../../../../../styled-components/media-breakpoints-mixin";

export const Search = () => {
  return (
    <SearchIconWrapper>
      <SearchIcon />
      <SearchInput type="text" placeholder="Search" />
    </SearchIconWrapper>
  );
};

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
`;
