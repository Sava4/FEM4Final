import React from "react";
import { CreateModal, ModalCloseWrapper, ModalClose } from "./modal.styles";

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
