import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";
import { Mapbox } from "../Map/Mapbox";
import { AddressesSelect } from "../Map/addressesPage";
import { Server, ImagePage } from "./GiftCard/giftCard.styles";
import { PageHeader } from "../common/PageHeader/PageHeader";
import { GiftCard } from "./GiftCard/GiftCard";
import { ShowOnTop } from "../SliderProducts/LoadMore";

export const StaticPage = () => {
  let { url } = useParams();
  const [page, setPage] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`/pages/${url}`)
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
            <PageHeader>Find your store</PageHeader>

            <Mapbox />
          </Page>
        </Fragment>
      );
    if (url === "gift-cards") return <GiftCard />;
    return (
      <Fragment>
        <Page>
          <Server dangerouslySetInnerHTML={{ __html: someHtml }} />
          <ImagePage src={process.env.PUBLIC_URL + images[0]} alt="" />
        </Page>
      </Fragment>
    );
  };
  return (
    <>
      <Static />
      <ShowOnTop />
    </>
  );
};
