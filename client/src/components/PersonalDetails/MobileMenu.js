import React, {useState} from "react";
import styled from "styled-components";
import arrow from "../common/Footer/footer-arrow.png"
import {PersonalInformation} from "./Details/PersonalInformation";
import {ChangePassword} from "./Details/ChangePassword";

const MAP = {
  personal: PersonalInformation,
  password: ChangePassword
};

export const MobileMenu = props => {
  const [active, setActive] = useState();
  return (
    <Container>
      <Holder>
        <Item>Personal Information</Item>
        <Arrow/>
      </Holder>
      <Holder>
        <Item>Change Password</Item>
        <Arrow/>
      </Holder>
      <Holder>
        <Item>Adess book</Item>
        <Arrow/>
      </Holder>
      <Holder>
        <Item>Orders</Item>
        <Arrow/>
      </Holder>
      <Holder>
        <Item>Wishlist</Item>
        <Arrow/>
      </Holder>

    </Container>
  );
};

const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const Holder = styled.div`
  border-bottom: 1px solid #E9EBF5;
`

const Item = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`

const Arrow = styled.div`
  width: 14px;
  height: 7px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(180deg);
  cursor: pointer;
`
