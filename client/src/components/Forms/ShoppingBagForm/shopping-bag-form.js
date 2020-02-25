import React from "react";
import styled from "styled-components";

import { Modal } from "../../Modal/modal";

export const ShoppingBagForm = props => {
  const { isModalOpen, onClose } = props;

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose}>
      <FormWrapper>
        <FormTitle>Shopping Bag</FormTitle>
        <FormSubtitle>You have a new item in your shopping bag.</FormSubtitle>
        <ButtonWrapper>
          <ButtonCheckout type="submit" value="CHECKOUT" />
          <ButtonBackToShopping type="submit" value="GO BACK TO SHOPPING" />
        </ButtonWrapper>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.form`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;
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
`;

const ButtonBackToShopping = styled(ButtonCheckout)`
  padding: 18px 22px;
  background: white;
  color: #002d50;
  border: 1px solid #002d50;
`;
