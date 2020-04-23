import React, {useState} from "react";
import {useSelector} from "react-redux";
import {MatchMediaHOC} from "react-match-media";
import {Container, Item, SideBar, Title} from "./PersonalDetails.styles";
import {Layout} from "../common/Layout";
import {PersonalInformation} from "./Details/PersonalInformation";
import {ChangePassword} from "./Details/ChangePassword";
import {MobileMenu} from "./MobileMenu";

const MAP = {
  personal: PersonalInformation,
  password: ChangePassword
};

export const PersonalDetails = props => {
  const user = useSelector(state => state.user);
  const [active, setActive] = useState("personal");
  const ActiveComponent = MAP[active];
  const ComponentForSmallScreen = MatchMediaHOC(<MobileMenu/>, "(max-width: 767px)");

  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
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
        <ActiveComponent/>
      </Container>
      <ComponentForSmallScreen/>
    </Layout>
  );
};
