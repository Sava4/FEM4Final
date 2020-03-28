import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";
import { MapBox } from "../Map/mapbox";
import { AddressesSelect } from "../Map/addressesPage";
import { GiftCard } from "./giftCard";
import { ScrollToTopController } from "../SliderProducts/LoadMore";

import styled, { css } from "styled-components";

export const StaticPage = () => {
  let { url } = useParams();
  const [page, setPage] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pages/${url}`)
      .then(result => {
        setPage(result.data);
        setImages(result.data.images);
      })
      .catch(err => {
        console.log(err);
      });
  }, [url]);

  const someHtml = page.htmlContent;

  const Static = () => {
    if (url === "find-your-store")
      return (
        <Fragment>
          <Page>
            <HeadPage>Find your store</HeadPage>
            <AddressesSelect />
            <MapBox />
          </Page>
          <ScrollToTopController parsed={url} />
        </Fragment>
      );
    if (url === "gift-cards")
      return (
        <Fragment>
          <Page>
            <HeadPage>Gift cards</HeadPage>
            <GiftCard />
          </Page>
          <ScrollToTopController parsed={url} />
        </Fragment>
      );
    return (
      <Fragment>
        <Page>
          <Server dangerouslySetInnerHTML={{ __html: someHtml }} />
          <ImagePage src={images[0]} alt="" />
        </Page>
        <ScrollToTopController parsed={url} />
      </Fragment>
    );
  };
  return <Static />;
};

const Server = styled.div``;
const HeadPage = styled.h1`
  text-align: center;
  align-self: center;
  font-size: 30px;
  margin: 45px;
  color: #484848;
  ${props =>
    props.main === true &&
    css`
      font-weight: bold;
      font-size: 40px;
      margin: 45px;
    `}
`;
const ImagePage = styled.img`
  margin: 0 auto 35px auto;
  width: 80%;
`;
