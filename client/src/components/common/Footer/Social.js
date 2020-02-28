import React from "react";
import styled from "styled-components";
import fb from "./fb.png";
import insta  from "./insta.png";
import {Z, SocialLink} from "./footer.styles";

const socialList = [
  { link: "https://facebook.com", icon: fb },
  { link: "https://instagram.com", icon: insta }
];

export const SocialMenu = () => {
  return socialList.map(item => {
    return (               
          <SocialLink {...item} key={item.link} href={item.link} target="_blank" rel="noopener noreferrer">
         url
          </SocialLink>      
    );
  });
};


