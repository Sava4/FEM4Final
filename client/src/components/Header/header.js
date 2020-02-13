import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { mediaMobile } from "../../styled-components/media-breakpoints-mixin";
import headerDesign from "../Header/header-design.png";

import { ShoppingBag, Favorites, Login, Search, Logo } from "../Header";

export const Header = () => {
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
            to="/favorites"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <Favorites />
          </NavLink>
          <NavLink
            to="/shopping-bag"
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
        <CategoriesItem href="#"> Jewelry</CategoriesItem>
        <CategoriesItem href="#">Collections</CategoriesItem>
        <CategoriesItem href="#">Engagement</CategoriesItem>
        <CategoriesItem href="#">Souvenirs</CategoriesItem>
        <CategoriesItem href="#">Gift Cards</CategoriesItem>
        <CategoriesItem href="#">Sale</CategoriesItem>
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

const CategoriesItem = styled.a`
  text-decoration: none;
  color: #000;
`;
