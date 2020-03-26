import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: inline-block;
  overflow: hidden;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 1;
    }
  100% {
    opacity: 0;
    }
`;

export const Loader = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  transform: translateZ(0) scale(0.7);
  backface-visibility: hidden;
  transform-origin: 0 0;
  box-sizing: content-box;

  div {
    left: 45px;
    top: 15px;
    position: absolute;
    animation: ${fadeIn} linear 1.0638297872340425s infinite;
    background: #ba253e;
    width: 12.18px;
    height: 33.06px;
    border-radius: 6.09px / 16.53px;
    transform-origin: 6.09px 35.67px;
  }

  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.851063829787234s;
    background: #ba253e;
  }

  div:nth-child(2) {
    transform: rotate(72deg);
    animation-delay: -0.6382978723404255s;
    background: #0b7855;
  }

  div:nth-child(3) {
    transform: rotate(144deg);
    animation-delay: -0.425531914893617s;
    background: #473b80;
  }

  div:nth-child(4) {
    transform: rotate(216deg);
    animation-delay: -0.2127659574468085s;
    background: #007494;
  }

  div:nth-child(5) {
    transform: rotate(288deg);
    animation-delay: 0s;
    background: #ba253e;
  }
`;
