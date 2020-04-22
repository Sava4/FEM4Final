import React, { useEffect, useState } from "react";
import { Modal } from "../../Modal/Modal";
import { useHistory } from "react-router";
import { Wrapper } from "../../Checkout/checkout.styles";
import { Button } from "../../common/Button/Button";
import {
  Content,
  CreateAccountSubtitle,
  CreateAccountTitle,
  FormWrapper,
  GoBackImage,
  GoBackText,
  GoBackWrapper,
  Order
} from "./orderForm.styles";

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
      <Button
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
