import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";
// import { Layout } from "./layout";

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
      <Page>
        <p>{page.htmlContent}</p>
      </Page>
    </div>
  );
};
