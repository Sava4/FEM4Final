import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Item, SideBar, Title } from "./PersonalDetails.styles";
import { Layout } from "../common/Layout";
import { PersonalInformation } from "./Details/PersonalInformation";
import { ChangePassword } from "./Details/ChangePassword";

const MAP = {
  personal: PersonalInformation,
  password: ChangePassword
};

export const PersonalDetails = () => {
  const user = useSelector(state => state.user);
  const [active, setActive] = useState("personal");
  const ActiveComponent = MAP[active];

  return (
    <Layout>
      <Title>Welcome to your account, {user.login} !</Title>
      <Container>
        <SideBar>
          <Item
            onClick={() => setActive("personal")}
            active={active === "personal"}
          >
            Personal Information
          </Item>
          <Item
            onClick={() => setActive("password")}
            active={active === "password"}
          >
            Change Password
          </Item>
          <Item>Adress Book</Item>
          <Item>Orders</Item>
          <Item>Wishlist</Item>
        </SideBar>
        <ActiveComponent />
      </Container>
    </Layout>
  );
};
