import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

import NecklacesPict from "../../../img/homePage/categories/necklaces.png";
import BraceletsPict from "../../../img/homePage/categories/bracelets.png";
import RingsPict from "../../../img/homePage/categories/rings.png";
import EarringsPict from "../../../img/homePage/categories/earring.png";

// import "./style.css"

export const HomepageCategiries = () => {
  return (
    <SectionCategiries>
      <p>EXPLORE CATEGORIES</p>
      <Categories>
        <Necklases to="categories">
          <p>NECKLACES</p>
        </Necklases>

        <Bracelets to="products" className="bracelets">
          <p>BRACELETS</p>
        </Bracelets>

        <Rings to="productsditails" className="rings">
          <p>RINGS</p>
        </Rings>
        <Earrings to="categories" className="earrings">
          <p>EARRINGS</p>
        </Earrings>
      </Categories>
    </SectionCategiries>
  );
};
const Necklases = styled(NavLink)`
    grid-area:neclases;
    background:url("${NecklacesPict}") ;
    background-size: auto auto;
    background-repeat: no-repeat;
    ${mediaMobile(`
    font-size: 20px;
    width: 375px;
    height: 231px; 
`)}
        
`;
const Bracelets = styled(NavLink)`
    grid-area:bracelets;
    background-image:url("${BraceletsPict}");
    width: 850px;
    height: 312px;
    background-repeat: no-repeat;
    background-size: cover;
    ${mediaMobile(`
    font-size: 20px;
    width: 375px;
    height: 231px; 
`)}
        
`;
const Rings = styled(NavLink)`
    grid-area:rings;
    background-image:url("${RingsPict}");
    width: 423px;
    height: 397px;
    background-repeat: no-repeat;
    background-size: cover;
    ${mediaMobile(`
    font-size: 20px;
    width: 375px;
    height: 231px; 
`)} 
        
`;
const Earrings = styled(NavLink)`
    grid-area:earrings;
    background-image:url("${EarringsPict}") ;
    width: 423px;
    height: 397px;
    background-repeat: no-repeat;
    background-size: cover;
    ${mediaMobile(`
    font-size: 20px;
    width: 375px;
    height: 231px; 
`)}
        
`;

const SectionCategiries = styled.div`
  height: 712px;
  & p {
    text-align: center;
    font-size: 24px;
  }
`;

const Categories = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  grid-gap: 2px;
  grid-template-areas:
    "neclases bracelets bracelets"
    "neclases rings earrings";

  & a {
    margin-left: 2px;
    text-decoration: none;
    position: relative;
    & p {
      margin: 0;
      color: black;
      position: absolute;
      bottom: 35px;
      right: 30px;
    }
  }
  ${mediaMobile(`
    font-size: 20px;
    grid-template-areas:
    "neclases "
    "bracelets"
    "rings"
    "earrings";

`)}
`;
