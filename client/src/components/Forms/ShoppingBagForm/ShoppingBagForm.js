import React from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "../../Modal/Modal";
import {
  FormWrapper,
  FormTitle,
  FormSubtitle,
  ButtonWrapper,
  ButtonCheckout,
  ButtonBackToShopping
} from "./shoppingBagForm.styles";

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
