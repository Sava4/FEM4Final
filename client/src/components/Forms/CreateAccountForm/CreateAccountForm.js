import React from "react";
import {
  FormWrapper,
  CreateAccountTitle,
  Content,
  Text,
  CreateAccountSubtitle
} from "./createAccountForm.styles";

import { Modal } from "../../Modal/Modal";

export const CreateAccountForm = props => {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <FormWrapper>
        <CreateAccountTitle>
          <Content>Thank you for creating an account with Zarina!</Content>
          <Text>Please check your inbox.</Text>
        </CreateAccountTitle>
        <CreateAccountSubtitle>
          We sent to your email the instructions to activate your account.
        </CreateAccountSubtitle>
      </FormWrapper>
    </Modal>
  );
};
