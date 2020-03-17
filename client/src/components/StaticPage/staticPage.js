import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";

export const StaticPage = props => {
  // console.log(props)
  let { url } = useParams();
  const [page, setPage] = useState({});
  console.log(url)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${url}`)
      .then(result => {
        console.log(result);
        setPage(result.data);
      })
      .catch(err => {
    console.log(err)
      });
  }, [url]);

  return (
    <div>
      <Page>{page.htmlContent}</Page>     
    </div>
  );
};
