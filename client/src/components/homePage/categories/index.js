import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import {
  mediaMobile,
  mediaTablet,
} from "../../../styledComponents/MediaBreakpointsMixin";

import NecklacesPict from "../../../img/homePage/categories/necklaces.png";
import BraceletsPict from "../../../img/homePage/categories/bracelets.png";
import RingsPict from "../../../img/homePage/categories/rings.png";
import EarringsPict from "../../../img/homePage/categories/earring.png";
import { set } from "mongoose";

export const HomepageCategories = (props) => {
  // let categories = ["necklaces", "bracelets", "rings", "earrings"];
let {category}=props
  let [categories3, setCategories3] = useState([]);
  let get2
  useEffect(() => {
    get2 = `http://localhost:5000/catalog/`;
    console.log("TCL:  get2", get2);
    axios
      .get(get2)
      .then((result) => {
        setCategories3(result.data);
        console.log("TCL: HomepageCategories -> result.data", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [get2]);

  // из стора или запрос или из слайдера там товары из все категорий
  // map p{имя категории} to={имя категории
  let categories4= Array.from(categories3) 
  let categories2 = categories4.filter(element=>(element.imgUrl)).map((item) => {  
 let categoryName=(item.name).toLowerCase()

    return (
      <Necklaces to={`/categories/${categoryName}/filter?categories=${categoryName}`}  key={item.id} url={item.imgUrl} >
        <p>{item.name}</p>
      </Necklaces>
    );
  });

  return (
    <SectionCategories>
      <p>EXPLORE CATEGORIES</p>
      <Categories>{categories2}</Categories>
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
  background-image: url(http://localhost:3000${props => props.url});
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
