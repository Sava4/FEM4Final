import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Title } from "../PersonalDetails.styles";
import {
  ItemHolder,
  ItemName,
  Arrow
} from "../PersonalInformation/personalInformation.styles";
import { Layout } from "../../common/Layout";
import { MediaRouter } from "../MobilePersonalInformation/MobilePersonalInformation";
import { Wishlist } from "../..";
import { DesktopWishlist } from "../DesktopWishlist/DesktopWishlist";
// import {WishList} from "../WishList/WishList";

export const MobileWishlist = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();

  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
      <ItemHolder onClick={onClick}>
        <ItemName>Wishlist</ItemName>
        <Arrow onClick={onClick} />
      </ItemHolder>
      {/*<WishList/>*/}
      <Holder>
        <Wishlist />
      </Holder>
    </Layout>
  );

  function onClick() {
    history.push("/account");
  }
};

export const WishlistRouter = () => {
  return <MediaRouter Mobile={MobileWishlist} Web={DesktopWishlist} />;
};

const Holder = styled.div`
  margin: 0 20px 40px 20px;
`;
