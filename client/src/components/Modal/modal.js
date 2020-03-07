import React from "react";
import styled from "styled-components";

import modalClose from "./modal-close-btn.png";

export const Modal = props => {
  const { isModalOpen, onClose, children } = props;

  return (
    <CreateModal isOpen={isModalOpen}>
      <ModalCloseWrapper>
        <ModalClose onClick={onClose} />
        {children}
      </ModalCloseWrapper>
    </CreateModal>
  );
};

const CreateModal = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 170px;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalCloseWrapper = styled.div`
  width: 70%;
  position: relative;
  margin: 0 auto;
`;

const ModalClose = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
  background: url(${modalClose});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;
