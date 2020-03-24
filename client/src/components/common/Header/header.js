import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import headerDesign from "./header-design.png";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";
import { LoginForm } from "../../Forms/LoginForm/login-form";
import { RegisterForm } from "../../Forms/RegisterForm/register-form";

import {
  ShoppingBag,
  Favorites,
  Login,
  Search,
  Logo,
  Navigation
} from "../Header/index";

export const HeaderContent = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const [isRegisterOpen, toggleRegistration] = useState(false);

  return (
    <Container>
      <Line />
      <HeaderWrapper>
        <Search />
        <NavLink exact to="/">
          <Logo />
        </NavLink>

        <HeaderIconWrapper>
          <Login onClick={() => toggleModal(!isModalOpen)} />
          {isModalOpen && (
            <LoginForm
              onRegister={onRegister}
              onClose={() => toggleModal(false)}
            />
          )}
          {isRegisterOpen && (
            <RegisterForm
              onClose={() => toggleRegistration(false)}
              onLogin={GoBackToLogin}
            />
          )}
          <NavLink
            to="/account/favorites"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <Favorites />
          </NavLink>
          <NavLink
            to="/account/shopping-bag"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <ShoppingBag />
          </NavLink>
        </HeaderIconWrapper>
      </HeaderWrapper>

      <Categories>
        <Navigation></Navigation>
      </Categories>
    </Container>
  );

  function onRegister() {
    toggleModal(false);
    toggleRegistration(true);
  }

  function GoBackToLogin() {
    toggleModal(true);
    toggleRegistration(false);
  }
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Line = styled.div`
  background-image: url(${headerDesign});
  background-size: contain;
  height: 11px;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 0 40px 0;

  ${mediaMobile(`
    border-bottom: 1px solid black;
    padding-bottom: 30px;
    margin-bottom: 0;
  `)}
`;

const HeaderIconWrapper = styled.div`
  display: flex;
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  position: relative;

  ${mediaMobile(`
    display: none;
  `)}
`;
