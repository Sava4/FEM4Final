import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import arrow from "../common/Footer/footer-arrow.png";
import { Layout } from "../common/Layout";
import { Title } from "../PersonalDetails/PersonalDetails.styles";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";
import { UserLogout } from "../PersonalDetails/Logout";
import { userLogoutAction } from "../../store/login";

export const Account = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
      <Container>
        <Holder onClick={onPersonalClick}>
          <Item>Personal Information</Item>
          <Arrow onClick={onPersonalClick} />
        </Holder>
        <Holder onClick={onPasswordClick}>
          <Item>Change Password</Item>
          <Arrow onClick={onPasswordClick} />
        </Holder>
        <Holder onClick={onWishlistClick}>
          <Item>Wishlist</Item>
          <Arrow onClick={onWishlistClick} />
        </Holder>
        <Holder>
          <Item>Adess book</Item>
          <Arrow />
        </Holder>
        <Holder>
          <Item>Orders</Item>
          <Arrow />
        </Holder>
        <UserLogout onClick={Logout} />
      </Container>
    </Layout>
  );

  function onPersonalClick() {
    history.push("/account/personal-information");
  }

  function onPasswordClick() {
    history.push("/account/change-password");
  }

  function onWishlistClick() {
    history.push("/account/wish-list");
  }

  function Logout() {
    dispatch(userLogoutAction());
    history.push("/");
  }
};

export const Container = styled.div`
  width: 25%;
  margin-left: 130px;
  margin-right: 120px;
  ${mediaMobile(`
    width: inherit;
    margin-left: 20px;
    margin-right: 20px;
  `)}
`;

export const Holder = styled.div`
  border-bottom: 1px solid #a7aabb;
  ${mediaMobile(`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E9EBF5;
  `)}
`;

export const Item = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 22px;
  margin-top: 22px;
  ${mediaMobile(`
    margin-bottom: 28px;
    margin-top: 28px;
  `)}
`;

export const Arrow = styled.div`
  ${mediaMobile(`
    width: 14px;
    height: 7px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  `)}
`;
