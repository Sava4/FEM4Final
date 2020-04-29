import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { SocialMenu } from "./Social";
// import { Email } from "./Email";
import Email from "./form";
import { ScrollToTopController } from "./../../SliderProducts/LoadMore";
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
  SocialContainerMobile,
  Contact,
  MobileWrap,
  H4
} from "./footer.styles.js";
// import AddMessageForm from './form'

export const Footer = () => {
  const [staticLinks, setStaticLinks] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const handleToggleContact = () => setContactOpen(!contactOpen);
  const handleToggleInfo = () => setInfoOpen(!infoOpen);
  const handleToggleService = () => setServiceOpen(!serviceOpen);

  let { url } = useParams();

  useEffect(() => {
    axios
      .get("/links")
      .then(result => {
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
  const itemArr =
    staticLinks.length &&
    staticLinks[0].links.map(item => {
      return (
        <Contact key={item._id}>
          <LinkToStatic url={`${item.url}`}>
            <NavLink to={`/pages/${item.url}`}>{item.description}</NavLink>
          </LinkToStatic>
        </Contact>
      );
    });

  const itemLinkArr = Array.from(itemLink); // если let то три раза вызывает map из 21 строки

  return (
    <FooterMain>
      <FooterInfo>
        <FooterInfoName>
          <div>
            <InfoContactWrapper>
              <h4>Contact Us</h4>
              <H4 onClick={handleToggleContact}>Contact Us</H4>
              <Arrow arrow={contactOpen} onClick={handleToggleContact} />
            </InfoContactWrapper>
            {contactOpen && (
              <MobileWrap>
                <Contact>+38 (044) 274-90-11</Contact>
                <Contact>+38 (073) 119-00-11</Contact>
                <Contact>Email:</Contact>
                <Contact>zarina-help@zarina.ua</Contact>
                {itemArr[0]}
              </MobileWrap>
            )}
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
              <H4 onClick={handleToggleInfo}>Information</H4>
              <Arrow arrow={infoOpen} onClick={handleToggleInfo} />
            </InfoAboutWrapper>
            <ul>{itemLinkArr.slice(1, 5)}</ul>
          </div>
          {infoOpen && <MobileWrap>{itemArr.slice(1, 5)}</MobileWrap>}
          <div>
            <InfoServiceWrapper>
              <ArrowWrapper>
                <h4>Costumer Service</h4>
                <H4 onClick={handleToggleService}>Costumer Service</H4>
                <Arrow arrow={serviceOpen} onClick={handleToggleService} />
              </ArrowWrapper>
              <SocialContainerMobile>
                {" "}
                <SocialMenu />
              </SocialContainerMobile>
            </InfoServiceWrapper>
            <ul>{itemLinkArr.slice(5, 12)}</ul>
            {serviceOpen && <MobileWrap>{itemArr.slice(5, 12)}</MobileWrap>}
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
            {/* <AddMessageForm /> */}
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
      <ScrollToTopController parsed={url} />
    </FooterMain>
  );
};
