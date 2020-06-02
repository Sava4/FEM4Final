import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {
  mediaMobile,
  mediaTablet
} from "../../../styledComponents/MediaBreakpointsMixin";
import { XMasonry, XBlock } from "react-xmasonry"; // Imports JSX plain sources

export const HomepageCategories = () => {
  let [categories3, setCategories3] = useState([]);

  useEffect(() => {
    let get2 = `/catalog/`;
    axios
      .get(get2)
      .then(result => {
        setCategories3(result.data);
        // console.log("TCL: HomepageCategories -> result.data", result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let categories4 =
    categories3 &&
    Array.from(categories3)
      .filter(element => element.imgUrl)
      //только категории с фото
      .reverse()
      .map(item => {
        let categoryName = item.name.toLowerCase();
        // console.log("TCL: HomepageCategories -> item", item);
        return (
          <XBlock key={item.id}>
            <div className="card" style={{ marginRight: "2px" }}>
              <Necklaces
                // to={`/categories/${categoryName}/filter?categories=${categoryName}`}
                to={`/categories/${categoryName}`}
                key={item.id}
              >
                <img
                  alt=""
                  src={process.env.PUBLIC_URL + item.imgUrl}
                  style={{
                    width: "100%",
                    border: `1px solid #E9EBF5`,
                    boxSizing: "border-box"
                  }}
                />
                <p>{item.name}</p>
              </Necklaces>
            </div>
          </XBlock>
        );
      });

  return (
    <SectionCategories>
      <p>EXPLORE CATEGORIES</p>
      <XMasonry targetBlockWidth={400}>{categories4}</XMasonry>
    </SectionCategories>
  );
};

const SectionCategories = styled.div`
  margin: 90px auto 0;
  max-width: 1300px;
  & p {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
  }
`;

const Necklaces = styled(NavLink)`
  height: 100%;
  text-transform: uppercase;
  & p {
    text-align: right;
    position: absolute;
    right: 25px;
    bottom: 0px;
    text-shadow: 1px 1px 0 white;
    font-size: 30px;
  }
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
