import React, { useEffect, useState } from "react";
import { Modal } from "../../Modal/Modal";
import arrow from "./arrow.png";
import { useHistory } from "react-router";
import { mediaTablet } from "../../../styledComponents/MediaBreakpointsMixin";
import { FormButton } from "../FormButton/FormButton";
import { Wrapper } from "../../Checkout/checkout.styles";
import styled from "styled-components";

export const OrderForm = props => {
  const { isModalOpen, onClose, email, icons } = props;
  const [isMobile, setMobile] = useState({});
  const history = useHistory();
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  const handleClickBack = () => history.push("/products");
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);

  return window.matchMedia("(max-width: 800px)").matches ||
    isMobile.width < 800 ? (
    <Order>
      <CreateAccountTitle>
        <Content>Thank you for your order with Zarina!</Content>
      </CreateAccountTitle>
      <Wrapper icons={"icons"}>{icons}</Wrapper>
      <CreateAccountSubtitle>
        We sent an email to <u> {email.toLowerCase()} </u> with your order
        details.
      </CreateAccountSubtitle>
      <FormButton
        width={"90%"}
        value={"Go back to shopping"}
        onClick={handleClickBack}
      />
    </Order>
  ) : (
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
        <GoBackWrapper onClick={handleClickBack}>
          <GoBackImage />
          <GoBackText>Go back to shopping</GoBackText>
        </GoBackWrapper>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.form`
  max-width: 1100px;
  width: 100%;
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
  ${mediaTablet(`
font-size: 16px;
  `)}
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
const Order = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 98%;
`;
