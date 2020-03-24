import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Modal } from "../../Modal/modal";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

export const ShoppingBagForm = props => {
  const history = useHistory();
  const { isModalOpen, onClose } = props;

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose}>
      <FormWrapper>
        <FormTitle>Shopping Bag</FormTitle>
        <FormSubtitle>You have a new item in your shopping bag.</FormSubtitle>
        <ButtonWrapper>
          <ButtonCheckout
            onClick={() => history.push("/account/shopping-bag")}
            type="button"
            value="CHECKOUT"
          />
          <ButtonBackToShopping
            type="button"
            onClick={onClose}
            value="GO BACK TO SHOPPING"
          />
        </ButtonWrapper>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  `)}
`;

const FormTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  font-size: 24px;
  text-transform: uppercase;
`;

const FormSubtitle = styled.div`
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin-top: 70px;

  ${mediaMobile(`
  width: 80%;
  flex-direction: column;
  margin-bottom: 40px;
  `)}
`;

const ButtonCheckout = styled.input`
  padding: 18px 70px;
  margin-left: 22px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #002d50;
  color: white;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  ${mediaMobile(`
  margin-bottom: 15px;
  margin-left: 0;
  `)}
`;

const ButtonBackToShopping = styled(ButtonCheckout)`
  padding: 18px 22px;
  background: white;
  color: #002d50;
  border: 1px solid #002d50;
`;
