import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";
import headerDesign from "../Header/header-design.png";

import {
  ShoppingBag,
  Favorites,
  Login,
  Search,
  Logo,
  Navigation
} from "../Header";

export const HeaderContent = () => {
  return (
    <Container>
      <Line />
      <HeaderWrapper>
        <Search />
        <NavLink exact to="/">
          <Logo />
        </NavLink>

        <HeaderIconWrapper>
          <Login />
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
};

const Container = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  border-bottom: 1px solid black;
`;

const Line = styled.div`
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
  margin: 30px 0;

  ${mediaMobile(`
    border-bottom: 1px solid black;
    padding-bottom: 30px;
  `)}
`;

const HeaderIconWrapper = styled.div`
  display: flex;
`;

const Categories = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid black;

  ${mediaMobile(`
    display: none;
  `)}
`;
