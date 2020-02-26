import React from "react";
import styled from "styled-components";
import fb from "./fb.png";
import insta  from "./insta.png";
import {Z} from "./footer.styles";

const socialList = [
  { link: "https://facebook.com", icon: fb },
  { link: "https://instagram.com", icon: insta }

];
console.log(fb)
console.log(socialList[0].icon)
export const SocialMenu = () => {
  return socialList.map(item => {
    return (
      <div key={item.link}>
        <Z {...item} >
          {console.log({ ...item })}
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            link
          </a>
        </Z>
      </div>
    );
  });
};

// const Z = styled.div`
// display: flex;
// width: 50px;
// justify-content: space-between;
// height: 25px;
// background: url(${props => props.icon})
// & a {
//   display: "block",
//   background: url(${props => props.icon.data}) 
// }

