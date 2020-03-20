import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../../styled-components/media-breakpoints-mixin";

import NecklacesPict from "../../../img/homePage/categories/necklaces.png";
import BraceletsPict from "../../../img/homePage/categories/bracelets.png";
import RingsPict from "../../../img/homePage/categories/rings.png";
import EarringsPict from "../../../img/homePage/categories/earring.png";

export const HomepageCategories = () => {
  let categories = ["necklaces", "bracelets", "rings", "earrings"];
  return (
    <SectionCategories>
      <p>EXPLORE CATEGORIES</p>
      <Categories>
        <Necklaces to={`/categories/${categories[0]}`}>
          <p>{categories[0]}</p>
        </Necklaces>

        <RightCategoriesWrapper>
          <Bracelets to={`/categories/${categories[1]}`}>
            <p>{categories[1]}</p>
          </Bracelets>
          <RingsWrapper>
            <Rings to={`/categories/${categories[2]}`}>
              <p>{categories[2]}</p>
            </Rings>
            <Earrings to={`/categories/${categories[3]}`}>
              <p>{categories[3]}</p>
            </Earrings>
          </RingsWrapper>
        </RightCategoriesWrapper>
      </Categories>
    </SectionCategories>
  );
};

const SectionCategories = styled.div`
  margin-top: 90px;
  & p {
    text-align: center;
    font-size: 24px;
  }
`;

const Categories = styled.div`
  margin-top: 30px;
  font-size: 40px;
  display: flex;

  & a {
    text-decoration: none;
    position: relative;
    & p {
      margin: 0;
      text-shadow: 1px 1px 0 white;
      color: black;
      position: absolute;
      bottom: 35px;
      right: 30px;
    }
  }
  ${mediaMobile(`
  flex-direction: column;
  `)}
`;

const Necklaces = styled(NavLink)`
  width: 40%;
  height: 712px;
  margin-right: 2px;
  background-image: url(${NecklacesPict});
  background-size: cover;
  background-repeat: no-repeat;
  text-transform: uppercase;
  ${mediaTablet(`
  width: 40%;
  height: 712px;
  `)}
  ${mediaMobile(`
  width: 100%;
  height: 231px; 
  margin-right: 0;
  margin-bottom: 2px;
  background-position: center;
`)}
`;

const RightCategoriesWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  ${mediaMobile(`
  width: 100%;
  `)}
`;

const Bracelets = styled(NavLink)`
  width: 100%;
  height: 312px;
  background-image: url(${BraceletsPict});
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
  ${mediaTablet(`
  width: 100%;
  height: 312px;
  `)}
  ${mediaMobile(`
  width: 100%;
  height: 231px; 
`)}
`;

const RingsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2px;

  ${mediaMobile(`
  flex-direction: column;
  `)}
`;

const Rings = styled(NavLink)`
  width: 50%;
  height: 397px;
  margin-right: 2px;
  background-image: url(${RingsPict});
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
  ${mediaTablet(`
  width: 50%;
  height: 397px;
  `)}
  ${mediaMobile(`
  width: 100%;
  height: 231px; 
  margin-right: 0;
  margin-bottom: 2px;
  background-position: center;
`)}
`;
const Earrings = styled(NavLink)`
  width: 50%;
  height: 397px;
  background-image: url(${EarringsPict});
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
  ${mediaTablet(`
  width: 50%;
  height: 397px;
  `)}
  ${mediaMobile(`
  width: 100%;
  height: 231px;
  background-position: center; 
`)}
`;
