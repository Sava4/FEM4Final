import React from "react";
import {useSelector} from "react-redux";
import { Container, Title } from "../PersonalDetails.styles";
import {Layout} from "../../common/Layout";
import {SideBarMenu} from "../SideBarMenu/SideBarMenu";
// import {Wishlist} from "../..";
import {WishList} from "../WishList/WishList";

export const DesktopWishlist = () => {
  const user = useSelector(state => state.user);
  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
      <Container>
        <SideBarMenu/>
        <WishList/>
      </Container>
    </Layout>
  )
}