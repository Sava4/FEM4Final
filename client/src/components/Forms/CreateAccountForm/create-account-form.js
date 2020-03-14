import React from "react";
import styled from "styled-components";

import { Modal } from "../../Modal/modal";

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

const FormWrapper = styled.form`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;
`;

const CreateAccountTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 65px;
  text-align: center;
`;

const Content = styled.div`
  font-size: 24px;
  line-height: 40px;
  text-transform: uppercase;
`;

const CreateAccountSubtitle = styled.div`
  margin-bottom: 100px;
  font-size: 14px;
`;
