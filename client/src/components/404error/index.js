import React, {Fragment} from "react";
import { Error404 } from "./error404";
import { HeaderContent } from "../common/Header/header";

// import styled from "styled-components"

export const Error = () => {
  return (
      <Fragment>
    <HeaderContent/>
      <Error404/>
      </Fragment>
  );
};

