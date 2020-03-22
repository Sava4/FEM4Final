import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import diamond from "./diamond.png";
import { FormButton } from "../Forms/FormButton/form-button";

export const EmptyCart = props => {
  const history = useHistory();

  return (
    <>
      <DiamondImg src={diamond} />
      <Text>{props.text}</Text>
      <FormButtonWrap onClick={() => history.push("/products")}>
        <FormButton value={"Go Back To Shopping"} />
      </FormButtonWrap>
    </>
  );
};

const DiamondImg = styled.img`
  height: 183px;
  width: 175px;
  margin: 31px 0 38px;
`;

const Text = styled.p`
  text-transform: uppercase;
  line-height: 19px;
  margin-bottom: 44px;
  width: max-content;
`;

const FormButtonWrap = styled.div`
  width: 380px;
  margin-bottom: 90px;
`;
