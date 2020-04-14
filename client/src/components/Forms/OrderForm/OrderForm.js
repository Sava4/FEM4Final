import React from "react";
import styled from "styled-components";

import { Modal } from "../../Modal/Modal";
import arrow from "./arrow.png";
import { SummaryWrapper, Wrapper } from "../../Checkout/checkout.styles";

export const OrderForm = props => {
  const { isModalOpen, onClose, email, icons } = props;

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose}>
      <FormWrapper>
        <CreateAccountTitle>
          <Content>Thank you for your order with Zarina!</Content>
        </CreateAccountTitle>
        <Wrapper icons={"icons"}>{icons}</Wrapper>
        <CreateAccountSubtitle>
          We sent an email to <u> {email.toLowerCase()} </u> with your order
          details.
        </CreateAccountSubtitle>
        <GoBackWrapper>
          <GoBackImage />
          <GoBackText>Go back to shopping</GoBackText>
        </GoBackWrapper>
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
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;
`;

const Content = styled.div`
  font-size: 24px;
  line-height: 40px;
  text-transform: uppercase;
`;

const CreateAccountSubtitle = styled.div`
  margin-bottom: 80px;
  font-size: 14px;
`;

const GoBackWrapper = styled.div`
  display: flex;
  margin-bottom: 80px;
`;
const GoBackText = styled.div`
  font-size: 14px;
`;

export const GoBackImage = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  color: #80858d;
`;
