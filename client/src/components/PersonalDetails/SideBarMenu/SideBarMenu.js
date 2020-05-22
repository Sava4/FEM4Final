import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { mediaTablet } from "../../../styledComponents/MediaBreakpointsMixin";
import { UserLogout } from "../Logout/Logout";
import { userLogoutAction } from "../../../store/login";

export const SideBarMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <SideBar>
      <Item onClick={onPersonalClick}>Personal Information</Item>
      <Item onClick={onPasswordClick}>Change Password</Item>
      <Item onClick={onWishlistClick}>Wishlist</Item>
      <Item onClick={onOrdersClick}>Orders</Item>
      <Item onClick={onAddressClick}>Address Book</Item>
      <UserLogout onClick={Logout} />
    </SideBar>
  );

  function onPersonalClick() {
    history.push("/account/personal-information");
  }

  function onPasswordClick() {
    history.push("/account/change-password");
  }

  function onAddressClick() {
    history.push("/account/address-book");
  }

  function onOrdersClick() {
    history.push("/account/orders");
  }

  function onWishlistClick() {
    history.push("/account/wish-list");
  }

  function Logout() {
    dispatch(userLogoutAction());
    history.push("/");
  }
};

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 130px;
  margin-bottom: 100px;

  ${mediaTablet(`
    margin-left: 50px;
  `)}
`;

export const Item = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: 1px solid #a7aabb;
  cursor: pointer;
  font-weight: ${props => (props.active ? "bold" : "normal")};
`;
