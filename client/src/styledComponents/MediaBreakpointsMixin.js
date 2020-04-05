import { css } from "styled-components";

export function mediaDesktop(content) {
  return css`
    @media (min-width: 1200px) {
      ${content}
    }
  `;
}

export function mediaTablet(content) {
  return css`
    @media (min-width: 768px) and (max-width: 1199px) {
      ${content}
    }
  `;
}

export function mediaMobile(content) {
  return css`
    @media (max-width: 767px) {
      ${content}
    }
  `;
}
