import React from "react";
import {
  FormWrapper,
  CreateAccountTitle,
  Content,
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
          <Content>Please check your inbox.</Content>
        </CreateAccountTitle>
        <CreateAccountSubtitle>
          We sent an email to mtanya95@gmail.com with the instructions to
          activate your account.
        </CreateAccountSubtitle>
      </FormWrapper>
    </Modal>
  );
};
