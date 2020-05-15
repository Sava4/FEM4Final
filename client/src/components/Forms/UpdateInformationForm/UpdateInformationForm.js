import React from "react";
import styled from "styled-components";
import { Modal } from "../../Modal/Modal";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

export const UpdateInformationForm = props => {
  const { onClose } = props;
  return (
    <Modal onClose={onClose}>
      <FormWrapper>
        <Content>Your personal information successfully changed !</Content>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #002d50;
  background: #ffffff;

  ${mediaMobile(`
    height: 300px;
  `)}
`;

const Content = styled.div`
  margin-top: 170px;
  font-size: 16px;
  text-align: center;

  ${mediaMobile(`
    margin-top: 130px;
    margin-left: 20px;
    margin-right: 20px;
  `)}
`;
