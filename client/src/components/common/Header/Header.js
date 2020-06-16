import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
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
  RegisterForm,
  CreateAccountForm
} from "../Header/index";

export const HeaderContent = () => {
  const [isModalOpen, toggleModal] = useState(false);
  const [isRegisterOpen, toggleRegistration] = useState(false);
  const [isSuccess, toggleSuccess] = useState(false);
  const user = useSelector(state => state.user);
  const history = useHistory();

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
          <Login onClick={onLoginClick} />
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
              onRegister={onRegisterSuccess}
            />
          )}
          {isSuccess && (
            <CreateAccountForm onClose={() => toggleSuccess(false)} />
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

  function onRegisterSuccess() {
    toggleRegistration(false);
    toggleSuccess(true);
  }

  function GoBackToLogin() {
    toggleModal(true);
    toggleRegistration(false);
  }

  function onLoginClick() {
    if (user) {
      history.push("/account");
      return;
    }
    toggleModal(!isModalOpen);
  }
};
