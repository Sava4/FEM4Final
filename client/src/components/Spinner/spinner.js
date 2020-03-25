import React from "react";
import { LoaderWrapper, Loader } from "./spinner.styles";

export const Spinner = ({ className }) => {
  return (
    <LoaderWrapper className={className}>
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
