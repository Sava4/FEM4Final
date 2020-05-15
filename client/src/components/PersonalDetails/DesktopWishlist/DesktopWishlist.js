import React from "react";
import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../../styledComponents/MediaBreakpointsMixin";
import { useSelector } from "react-redux";
import { Container, Title } from "../PersonalDetails.styles";
import { Layout } from "../../common/Layout";
import { SideBarMenu } from "../SideBarMenu/SideBarMenu";
import { Wishlist } from "../..";

export const DesktopWishlist = () => {
  const user = useSelector(state => state.user);
  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
      <Container>
        <SideBarMenu />
        <Details>
          <Wishlist />
        </Details>
      </Container>
    </Layout>
  );
};

const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 100px;
  margin-right: 100px;

  ${mediaTablet(`
    margin-left: 50px;
    margin-right: 50px;
  `)}

  ${mediaMobile(`
    width: inherit;
    margin: 20px 20px 0 20px;
  `)}
`;
