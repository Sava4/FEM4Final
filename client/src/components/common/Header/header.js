import React, { useState } from "react";
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
  MainMenu,
  Navigation
} from "../Header/index";
import { NavState } from "./HamburgerMenu/navState";

export const HeaderContent = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const [isRegisterOpen, toggleRegistration] = useState(false);

  return (
    <Container>
      <Line />
      <HeaderWrapper>
        <NavState>
          <MainMenu />
        </NavState>
        <Search />
        <Logo />
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
          <Favorites />
          <ShoppingBag />
        </HeaderIconWrapper>
      </HeaderWrapper>

      <Categories>
        <Navigation />
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
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 0;
  `)}
`;

const HeaderIconWrapper = styled.div`
  display: flex;
`;

const Categories = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  padding-bottom: 30px;

  ${mediaMobile(`
    display: none;
  `)}
`;
