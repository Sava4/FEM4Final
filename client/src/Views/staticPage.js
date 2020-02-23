import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
// import { Layout } from "./layout";
import { Header, Footer } from "../Components";
import {
  mediaDesktop,
  mediaMobile,
  mediaTablet
} from "../styled-components/media-breakpoints-mixin";

export const StaticPage = props => {
  let { url } = useParams();

  const [page, setPage] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/pages/${url}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        setPage(json);
      });
  }, [url]);

  return (
    <div>
      <Header />
      <Page>
        <p>{page.htmlContent}</p>
      </Page>
      <Footer />
    </div>
  );
};

const Page = styled.div` 
  margin: 0 auto;
    
    ${mediaDesktop(`
      width: 80%;     
    `)}
    ${mediaTablet(`
    width: 80%;     
    `)}
    ${mediaMobile(`
    width: 80%;    
    `)}
`;
