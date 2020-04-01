import React from "react";
import {
  FormWrapper,
  CreateAccountTitle,
  Content,
  CreateAccountSubtitle,
  GoBackImage,
  GoBackWrapper,
  GoBackText
} from "./orderForm.styles";

import { Modal } from "../../Modal/Modal";

export const OrderForm = props => {
  const { isModalOpen, onClose } = props;

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose}>
      <FormWrapper>
        <CreateAccountTitle>
          <Content>Thank you for your order with Zarina!</Content>
        </CreateAccountTitle>
        <CreateAccountSubtitle>
          We sent an email to mtanya95@gmail.com with your order details.
        </CreateAccountSubtitle>
        <GoBackWrapper>
          <GoBackImage />
          <GoBackText>Go back to shopping</GoBackText>
        </GoBackWrapper>
      </FormWrapper>
    </Modal>
  );
};
