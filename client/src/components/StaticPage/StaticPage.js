import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";
import { Mapbox } from "../Map/Mapbox";
import { AddressesSelect } from "../Map/AddressesPage";
import { Server, HeadPage, ImagePage } from "./GiftCard/giftCard.styles";
import { GiftCard } from "./GiftCard/GiftCard";
import {
  ScrollToTopController,
  onTop,
  ShowOnTop
} from "../SliderProducts/LoadMore";

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
            <Mapbox />
          </Page>
        </Fragment>
      );
    if (url === "gift-cards")
      return (
        <Fragment>
          <Page>
            <HeadPage>Gift cards</HeadPage>
            <GiftCard />
          </Page>
        </Fragment>
      );
    return (
      <Fragment>
        <Page>
          <Server dangerouslySetInnerHTML={{ __html: someHtml }} />
          <ImagePage src={images[0]} alt="" />
        </Page>
      </Fragment>
    );
  };
  return (
    <>
      <Static />
      {/* <ScrollToTopController parsed={url} /> */}
      <ShowOnTop />
    </>
  );
};
