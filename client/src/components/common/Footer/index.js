import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { SocialMenu } from "./Social";
import { Email } from "./Email";
import {
  LinkToStatic,
  FooterMain,
  FooterInfo,
  FooterText,
  Arrow,
  ArrowWrapper,
  FooterInfoName,
  InfoContactWrapper,
  InfoAboutWrapper,
  InfoServiceWrapper,
  FooterInfoSocial,
  FooterBottom,
  SocialContainer,
  SocialContainerMobile
} from "./footer.styles.js";

export const Footer = () => {
  const [staticLinks, setStaticLinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/links")
      .then(result => {
        // console.log(result.data);
        setStaticLinks(result.data);
      })
      .catch(err => {
        /*Do something with error, e.g. show error to user*/
      });
  }, []);

  //проверям массив не пустой
  const itemLink =
    staticLinks.length &&
    staticLinks[0].links.map(item => {
      // console.log(item.url);

      return (
        // в бекэнде не совпадает адреса в links /documents, а в pages /pages и приходит массив в нем объект с названием и в нем массив links
        <div key={item._id}>
          <li>
            <LinkToStatic url={`${item.url}`}>
              <NavLink to={`/pages/${item.url}`}>{item.description}</NavLink>
            </LinkToStatic>
          </li>
        </div>
      );
    });
  const itemLinkArr = Array.from(itemLink); // если let то три раза вызывает map из 21 строки
  // console.log(itemLinkArr);
  return (
    <FooterMain>
      <FooterInfo>
        <FooterInfoName>
          <div>
            <InfoContactWrapper>
              <h4>Contact Us</h4>
              <Arrow />
            </InfoContactWrapper>
            <ul>
              <li>+38 (044) 274-90-11</li>
              <li>+38 (073) 119-00-11</li>
              <li>Email:</li>
              <li>zarina-help@zarina.ua</li>
              {itemLinkArr[0]}
            </ul>
          </div>
          <div>
            <InfoAboutWrapper>
              <h4>Information</h4>
              <Arrow />
            </InfoAboutWrapper>
            <ul>{itemLinkArr.slice(1, 5)}</ul>
          </div>
          <div>
            <InfoServiceWrapper>
              <ArrowWrapper>
                <h4>Costumer Service</h4>
                <Arrow />
              </ArrowWrapper>
              <SocialContainerMobile>
                {" "}
                <SocialMenu />
              </SocialContainerMobile>
            </InfoServiceWrapper>
            <ul>{itemLinkArr.slice(5, 12)}</ul>
          </div>
        </FooterInfoName>
        <FooterInfoSocial>
          <div>
            <h4>Sign Up To Newsletter</h4>
            <ul>
              <li>Stay up to date with all the new designs,</li>
              <li>collection launches, events and much more.</li>
            </ul>
            <Email />
            <SocialContainer>
              {" "}
              <SocialMenu />
            </SocialContainer>
          </div>
        </FooterInfoSocial>
      </FooterInfo>
      <FooterBottom>
        <FooterText>&copy; 2013-2020 ZARINA.UA All Rights</FooterText>
      </FooterBottom>
    </FooterMain>
  );
};
