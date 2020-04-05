import React, { useState } from "react";
import {
  Container,
  Line,
  HeaderWrapper,
  HeaderIconWrapper,
  Categories
} from "./header.styles";

import {
  ShoppingBag,
  Favorites,
  Login,
  Search,
  Logo,
  MainMenu,
  Navigation,
  NavState,
  LoginForm,
  RegisterForm
} from "../Header/index";

export const HeaderContent = () => {
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
