import styled, { css } from "styled-components";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

export const Server = styled.div``;

export const HeadPage = styled.h1`
  text-align: center;
  align-self: center;
  font-size: 30px;
  margin: 45px;
  color: #484848;
  ${props =>
    props.main === true &&
    css`
      font-weight: bold;
      font-size: 40px;
      margin: 45px;
    `}
`;
export const ImagePage = styled.img`
  margin: 0 auto 35px auto;
  width: 80%;
`;
export const GiftContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${mediaMobile(`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`)}
`;
export const GiftWrapper = styled.div`
  margin: 15px;
  display: flex;
`;
export const Gift = styled.img`
  width: 270px;
  height: 168px;
`;
export const Price = styled.span`
  font-size: 16px;
  color: #f1efef;
  margin-left: -52px;
  margin-top: 145px;
`;
