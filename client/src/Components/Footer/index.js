import React from "react";
import styled from "styled-components";


const FooterMain = styled.div`
  display: flex;
  width: 100%;
  height: 377px;
  border-top: 11px solid;
  border-image: linear-gradient( 90deg,#002d50 0%,#007395 69.91%, #bc243f 96.25%)100;
  box-sizing: border-box;
  position: absolute;
  margin-top: 40px;
`;
const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  margin-left: 130px;
  margin-top: 30px;
`;
const FooterInfoName = styled.div`
  margin:0;
  display: flex;
  width: 600px;
  justify-content: space-between; 
  justify-items: flex-start;
  font-size: 12px;
  & h4 {
    display: block;
    font-size: 14px;
  }
  & ul {
  list-style: none;
  text-align: left;
  margin:0;
  padding:0;
  }  
  & li {
    margin-bottom: 16px;
  }
  & a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    margin-bottom: 5px;
  }
`;
const FooterInfoSocial = styled.div`
width: 330px;
font-size: 12px;
& h4 {
  display: block;
  font-size: 14px;
}
& ul {
  list-style: none;
  text-align: left;
  margin:0;
  padding:0;
  }  
& li {
  margin-bottom: 16px;
}
`
const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  background-color: #002d50;
  width: 100%;
  height: 43px;
  
`;
const FooterText = styled.div`
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  color: #ffffff;
`;

export const Footer = () => {
  return (
    <FooterMain>
      <FooterInfo>
        <FooterInfoName>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>+38 (044) 274-90-11</li>
              <li>+38 (073) 119-00-11</li>
              <li>Email:</li>
              <li>zarina-help@zarina.ua</li>
              <li>
                <a href="#">Find Your Store</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Information</h4>
            <ul>
              <li><a href="/pages/brand-history">Brand History</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Supply Chain Acts</a></li>
              <li><a href="#">Website Policies</a></li>
            </ul>
          </div>
          <div>
            <h4>Costumer Service</h4>
            <ul>
              <li><a href="#">Payments & Shipping</a></li>
              <li><a href="#">Returns & Replacements</a></li>
              <li><a href="#">Loyalty Program</a></li>
              <li><a href="#">Product Care</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
        </FooterInfoName>
        <FooterInfoSocial>
          <div>
            <h4>Sign Up To Newsletter</h4>
            <ul>
              <li>Stay up to date with all the new designs,</li>
              <li>collection launches, events and much more.</li>
            </ul>
          </div>
        </FooterInfoSocial>
      </FooterInfo>
      <FooterBottom>
        <FooterText>&copy; 2013-2020 ZARINA.UA All Rights</FooterText>
      </FooterBottom>
    </FooterMain>
  );
};
