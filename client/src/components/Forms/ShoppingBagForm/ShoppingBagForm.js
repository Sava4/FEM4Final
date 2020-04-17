import React from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../common/Button/Button";
import {
  FormWrapper,
  FormTitle,
  FormSubtitle,
  ButtonWrapper
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
          <Button
            onClick={() => history.push("/account/shopping-bag")}
            type="button"
            value="CHECKOUT"
            width={"228px"}
          />
          <Button
            secondary
            type="button"
            onClick={onClose}
            value="GO BACK TO SHOPPING"
            width={"228px"}
          />
        </ButtonWrapper>
      </FormWrapper>
    </Modal>
  );
};
