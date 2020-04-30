import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
import {Title} from "../PersonalDetails.styles";
import {ItemHolder, ItemName, Arrow} from "../PersonalInformation/personalInformation.styles";
import {Layout} from "../../common/Layout";
import {ChangePassword} from "../ChangePassword/ChangePassword";
import {MediaRouter} from "../MobilePersonalInformation/MobilePersonalInformation";

export const MobileChangePassword = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();

  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
      <ItemHolder onClick={onClick}>
        <ItemName>Change Password</ItemName>
        <Arrow onClick={onClick}/>
      </ItemHolder>
      <ChangePassword/>
    </Layout>
  );

  function onClick() {
    history.push("/account");
  }
};


export const ChangePasswordRouter = () => {
  return (
    <MediaRouter Mobile={MobileChangePassword} Web={ChangePassword}/>
  )
};
