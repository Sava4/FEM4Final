import styled from "styled-components";
import modalClose from "./modalCloseBtn.png";

export const CreateModal = styled.div`
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

export const ModalCloseWrapper = styled.div`
  width: 70%;
  position: relative;
  margin: 0 auto;
`;

export const ModalClose = styled.div`
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