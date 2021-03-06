import { NavLink } from "react-router-dom";
import styled from "styled-components";
import search from "./search.png";
import { mediaMobile } from "../../../../styledComponents/MediaBreakpointsMixin";

export const Filter = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 280px;
  border: none;
  font-size: 14px;
  font-family: inherit;
  border-bottom: 1px solid black;
  text-align: end;

  ::placeholder {
    color: black;
  }

  :focus {
    outline: none;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  :focus::-moz-placeholder {
    color: transparent;
  }

  :focus:-moz-placeholder {
    color: transparent;
  }

  :focus:-ms-input-placeholder {
    color: transparent;
  }

  ${mediaMobile(`
    display: none;
  `)}
`;

export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchHolder = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const PreviewWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25px;
  z-index: 3;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: scroll;
  cursor: pointer;
`;

export const Loaded = styled.div`
  height: 500px;
  margin: 15px 15px 0 15px;
  text-align: center;
  color: #80858d;
`;

export const TextHolder = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 10px 15px;
`;

export const Image = styled.div`
  width: 50px;
  height: 50px;
  background-image: ${props => `url(${props.icon})`};
  background-size: cover;
`;

export const ImageDescription = styled.span`
  font-size: 14px;
  margin-left: 10px;
  text-transform: capitalize;
`;
