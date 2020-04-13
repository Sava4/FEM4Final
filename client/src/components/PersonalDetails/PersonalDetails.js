import React from "react";
import {Layout} from "../common/Layout";
import {Container, Item, SideBar, Title} from "./PersonalDetails.styles";
import {PersonalInformation} from "./Details/PersonalInformation";
import {ChangePassword} from "./Details/ChangePassword";

export const PersonalDetails = () => {
  return (
    <Layout>
      <Title>Welcome to your account, Tatiana</Title>
      <Container>
        <SideBar>
          <Item>Personal Information</Item>
          <Item>Change Password</Item>
          <Item>Adress Book</Item>
          <Item>Orders</Item>
          <Item>Wishlist</Item>
        </SideBar>
        <PersonalInformation/>
        {/*<ChangePassword/>*/}
      </Container>
    </Layout>
  )
};