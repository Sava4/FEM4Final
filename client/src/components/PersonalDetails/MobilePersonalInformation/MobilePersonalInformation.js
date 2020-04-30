import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Title } from "../PersonalDetails.styles";
import {
  ItemHolder,
  ItemName,
  Arrow
} from "../PersonalInformation/personalInformation.styles";
import { Layout } from "../../common/Layout";
import { PersonalInformation } from "../PersonalInformation/PersonalInformation";
import { Account } from "../../Account/Account";
import { PersonalDetails } from "../PersonalDetails";

export const MobilePersonalInformation = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();

  return (
    <Layout>
      <Title>Welcome to your account, {user.login}!</Title>
      <ItemHolder onClick={onClick}>
        <ItemName>Personal Information</ItemName>
        <Arrow onClick={onClick} />
      </ItemHolder>
      <PersonalInformation />
    </Layout>
  );

  function onClick() {
    history.push("/account");
  }
};

export const AccountRoute = () => {
  const Web = () => {
    return <RedirectTo path={"account/personal-information"} />;
  };

  return <MediaRouter Mobile={Account} Web={Web} />;
};

export const PersonalInformationRouter = () => {
  return (
    <MediaRouter Mobile={MobilePersonalInformation} Web={PersonalDetails} />
  );
};

export const RedirectTo = props => {
  const { path } = props;
  const history = useHistory();

  useEffect(() => {
    history.push(path);
  });

  return null;
};

export const MediaRouter = props => {
  const { Mobile, Web } = props;
  const mediaMatch = window.matchMedia("(max-width: 767px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const onMediaChange = mediaMatchEvent => {
      setMatches(mediaMatchEvent.matches);
    };
    mediaMatch.addEventListener("change", onMediaChange);

    return () => {
      mediaMatch.removeEventListener("change", onMediaChange);
    };
  });

  return matches ? <Mobile /> : <Web />;
};
