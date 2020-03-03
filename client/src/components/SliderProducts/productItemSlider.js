import React from "react";
import { Image, Name, Price } from "../ProductDetails/productDetails";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProductItem = props => {
 
  return (
    <NavLink to={`/product/${props.itemNo}`}>
    <Card key={props.key}>  
    {/* //поменял путь для локальных картинок */}
      <Image alt="" src={props.imageUrls[0]} size={"small"} />
      <Name size={"small"} style={{height:"80px"}}>{`${props.name} "${props.collection}"`}</Name>
      <Price size={"small"}>{props.currentPrice}</Price>
    </Card>
    </NavLink>
  );
};

//*** STYLED-COMPONENTS ***//

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  width: 280px;
  height: 392px;
  @media (max-width: 1050px) {
  }
  @media (max-width: 992px) {
    width: 43%;
    // align-items: space-between;
  }
  @media (max-width: 767px) {
    // align-items: space-between;
    width: 43%;
  }
  @media (max-width: 439px) {
    width: 43%;
  }
`;
