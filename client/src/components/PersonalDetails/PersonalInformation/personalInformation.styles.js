import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../../styledComponents/MediaBreakpointsMixin";
import arrow from "../../common/Footer/footer-arrow.png";
import edit from "../edit.png";

export const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-left: 120px;
  margin-right: 130px;

  ${mediaTablet(`
    margin-left: 50px;
    margin-right: 50px;
  `)}

  ${mediaMobile(`
    width: inherit;
    margin: 20px 20px 0 20px;
  `)}
`;

export const ItemHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ItemName = styled.div`
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Arrow = styled.div`
  width: 14px;
  height: 7px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const InputWrapper = styled.div`
  width: 50%;
  margin-bottom: 20px;

  ${mediaTablet(`
    width: 100%;
  `)}

  ${mediaMobile(`
    width: 100%;
  `)}
`;

export const Holder = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 25px;
`;

export const Edit = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${edit});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 13px;
`;
