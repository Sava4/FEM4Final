import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";

export const StaticPage = props => {
  let { url } = useParams();
  const [page, setPage] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pages/${url}`)
      .then(result => {
        // console.log(result.data);
        setPage(result.data);
      })
      .catch(err => {
        /*Do something with error, e.g. show error to user*/
      });
  }, [url]);

  return (
    <div>
      <Page>{page.htmlContent}</Page>
    </div>
  );
};
