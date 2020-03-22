import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { Page } from "./staticPage.styles";

export const StaticPage = props => {
  // console.log(props)
  let { url } = useParams();
  const [page, setPage] = useState({});
  console.log(url);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pages/${url}`)
      .then(result => {
        console.log(result);
        setPage(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [url]);

 
  
  useEffect(() => () => { // <-- Now we return the useEffect teardown effect, which will be fired only after the path/search change for the first time
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [url]);

  return (
    <div>
      <Page>{page.htmlContent}</Page>
    </div>
  );
};
