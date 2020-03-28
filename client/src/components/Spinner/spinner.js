import React from "react";
import { LoaderWrapper, Loader } from "./spinner.styles";

export const Spinner = () => {
  return (
    <LoaderWrapper>
      <Loader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </LoaderWrapper>
  );
};
