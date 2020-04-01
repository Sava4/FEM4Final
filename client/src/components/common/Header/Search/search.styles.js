import { NavLink } from "react-router-dom";
import styled from "styled-components";
import search from "./search.png";
import { mediaMobile } from "../../../../styled-components/MediaBreakpointsMixin";

export const Filter = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
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
`;
export const PreviewWrapper = styled.div`
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
