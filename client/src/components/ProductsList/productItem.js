import React from "react";
import { NavLink } from "react-router-dom";
import { Image, Name, Price } from "../ProductDetails/productDetails";
import {
  mediaMobile,
  mediaTablet,
  mediaTabletPortrait
} from "../../styled-components/media-breakpoints-mixin";
import styled, { css } from "styled-components";

export const ProductItem = props => {
  return (
    <Card
      to={`/product-details/${props.id}`}
      key={props.key}
    >
      <Image alt="" src={props.img} size={"small"} />
      <Name size={"small"}>{`${props.name}`}</Name>
      <Price size={"small"}>{props.previousPrice}</Price>
    </Card>
  );
};

const Card = styled(NavLink)`
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  width: 32%;
  height: 350px;
  text-decoration: none;
  color: #000;
  border: 1px solid #e9ebf5;
  &: hover {
    border: 1px solid #002d50;
  }
   ${mediaTablet(`
    width: 43%;
    align-items: space-between;
`)}
  ${mediaTabletPortrait(`
    align-items: space-between;
    width: 43%;
    margin: 2px;
    height: 300px;
      `)}
  ${mediaMobile(`
    padding-bottom: 2px;
    width: 43%;
    margin: 2px;
    height: 250px;
      `)}
`;
