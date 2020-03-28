import React from "react";
import giftCard from "./gift-card.png";

import styled from "styled-components";

export const GiftCard = () => {
  return (
    <GiftContainer>
      <GiftWrapper>
        <Gift src={giftCard} alt={"Gift Card"} />
        <Price>100$</Price>
      </GiftWrapper>
      <GiftWrapper>
        <Gift src={giftCard} alt={"Gift Card"} />
        <Price>200$</Price>
      </GiftWrapper>
      <GiftWrapper>
        <Gift src={giftCard} alt={"Gift Card"} />
        <Price>300$</Price>
      </GiftWrapper>
      <GiftWrapper>
        <Gift src={giftCard} alt={"Gift Card"} />
        <Price>500$</Price>
      </GiftWrapper>
      <GiftWrapper>
        <Gift src={giftCard} alt={"Gift Card"} />
        <Price>1000$</Price>
      </GiftWrapper>
    </GiftContainer>
  );
};

const GiftContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;
const GiftWrapper = styled.div`
  margin: 15px;
  display: flex;
`;
const Gift = styled.img`
  width: 270px;
  height: 168px;
`;
const Price = styled.span`
  font-size: 16px;
  color: #f1efef;
  margin-left: -52px;
  margin-top: 145px;
`;
