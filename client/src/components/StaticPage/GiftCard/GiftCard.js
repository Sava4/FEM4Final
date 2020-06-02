import React, { Fragment } from "react";
import giftCard from "./gift-card.png";
import { GiftContainer, GiftWrapper, Gift, Price } from "./giftCard.styles";
import { Page } from "../staticPage.styles";
import { PageHeader } from "../../common/PageHeader/PageHeader";

export const GiftCard = () => {
  return (
    <Page>
      <PageHeader>Gift cards</PageHeader>
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
          <Price>400$</Price>
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
    </Page>
  );
};
