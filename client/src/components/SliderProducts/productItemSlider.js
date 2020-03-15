import React from "react";
import { Image, Name, Price } from "../ProductDetails/productDetails";
import styled from "styled-components";

//на homepage работает без http://localhost:3000/ и только до ухода со страницы
export const ProductItem = props => {
  return (
    <Card key={props.key} itemNo={props.itemNo}>
      <Image
        alt=""
        src={`http://localhost:3000/${props.imageUrls[0]}`}
        size={"small"}
      />
      <Name
        size={"small"}
        style={{ height: "80px" }}
      >{`${props.name} "${props.collection}"`}</Name>
      <Price size={"small"}>{props.currentPrice}</Price>
    </Card>
  );
};

//*** STYLED-COMPONENTS ***//

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(233, 235, 245);
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
