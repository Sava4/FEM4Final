import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";
import { MapBox } from "../Map/mapbox";
import { AddressesSelect } from "../Map/addressesPage";
import { GiftCard } from "./GiftCard/giftCard";
import { ScrollToTopController } from "../SliderProducts/LoadMore";
import {Server,
HeadPage,
ImagePage} from "./GiftCard/giftCard.styles";

export const StaticPage = () => {
  let { url } = useParams();
  const [page, setPage] = useState({});
  const [images, setImages] = useState([]);
  const [res, setResponse] = useState("");

  const updatedPage = {
    description: "Website Policies"
  };

  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      /*Do something with newProduct*/
      setResponse(response.data.token);
      console.log(res);
    });
  axios
    .put("http://localhost:5000/links/5e5183bbe7e84c18cc340b66", updatedPage, {
      headers: { Authorization: res }
    })
    .then(updatedPage => {
      console.log(updatedPage);
    })
    .catch(err => {
      console.log(err);
    });
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

