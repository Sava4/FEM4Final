import React from "react";
import {
  CreateModal,
  ModalCloseWrapper,
  ModalClose,
  OverflowBody
} from "./modal.styles";

export const Modal = props => {
  const { isModalOpen, onClose, children } = props;

  return (
    <CreateModal isOpen={isModalOpen}>
      <OverflowBody />
      <ModalCloseWrapper>
        <ModalClose onClick={onClose} />
        {children}
      </ModalCloseWrapper>
    </CreateModal>
  );
};
