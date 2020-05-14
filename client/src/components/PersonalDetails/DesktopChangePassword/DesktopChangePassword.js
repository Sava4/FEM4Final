import React from "react";
import { useSelector } from "react-redux";
import { Container, Title } from "../PersonalDetails.styles";
import { Layout } from "../../common/Layout";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import { SideBarMenu } from "../SideBarMenu/SideBarMenu";

export const DesktopChangePassword = () => {
  const user = useSelector(state => state.user);

  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
      <Container>
        <SideBarMenu />
        <ChangePassword />
      </Container>
    </Layout>
  );
};
