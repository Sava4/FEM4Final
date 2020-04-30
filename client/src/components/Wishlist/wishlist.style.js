import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import bug from "../common/Header/ShoppingBag/shoppingBagIcon.png";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";

export const ArticleNo = styled.p`
  line-height: 10px;
  color: #a1a5ad;
  flex: 1;
`;
export const CloseImg = styled.img`
  margin: 3px;
  height: 14px;
  width: 14px;
  vertical-align: middle;
`;
export const Description = styled.p`
  text-transform: uppercase;
  line-height: 24px;
  width: 75%;
  margin-bottom: 12px;
  flex: 1;
  ${mediaMobile(`
  width:90%;
  font-size: 12px;
  `)}
`;
export const ImgWrap = styled(NavLink)`
  height: 188px;
  width: 180px;
  margin-right: 20px;
  border: 1px solid #e9ebf5;
  &: hover {
    border: 1px solid #002d50;
  }
`;
export const ItemContainer = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  padding: 21px 0;
  border-bottom: 1px solid #a7aabb;
  &:first-child {
    border-top: 1px solid #a7aabb;
  }
`;
export const RemoveBtn = styled.div`
  line-height: 10px;
  text-decoration-line: underline;
  cursor: pointer;
  & span {
    margin-left: 10px;
  }
`;
export const Price = styled.div`
  font-size: 16px;
  line-height: 21px;
  padding-top: 10px;
  &:after {
    content: "UAH";
    margin-left: 5px;
    display: inline;
    font-size: 12px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 439px) {
    font-size: 12px;
  }
`;
export const ProdImg = styled.img`
  height: 186px;
  width: 178px;
  object-fit: contain;
`;
export const ShoppingBagIcon = styled.button`
  width: 20px;
  height: 20px;
  margin-left: -30px;
  margin-top: 5px;
  background-image: url(${bug});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  &: after {
    content: "Add";
    color: #a1a5ad;
    font-size: 12px;
    position: absolute;
    margin-top: -3px;
    padding-left: 20px;
  }
  ${props =>
    props.left === "true" &&
    css`
      margin-left: 0;
    `}
`;
export const Wrap = styled.div`
  margin-top: 20px;
`;
export const Wrapper = styled.div.attrs(props => ({
  height: props.height || "auto",
  width: props.width || "100%",
  flexDirection: props.flexDirection || "column",
  alignItems: props.alignItems || "center",
  alignSelf: props.alignSelf || "auto",
  justifySelf: props.justifySelf || "auto",
  justifyContent: props.justifyContent || "flex-start"
}))`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  justify-self: ${props => props.justifySelf};
  justify-content: ${props => props.justifyContent};
`;

export const WrapperLink = styled(NavLink)``;
