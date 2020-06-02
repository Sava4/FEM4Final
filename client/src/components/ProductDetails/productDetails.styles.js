import styled, { css } from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../styledComponents/MediaBreakpointsMixin";

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 15px;
  ${mediaMobile(`
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`)}
  ${props =>
    props.flex === "column" &&
    css`
      flex-direction: column;
    `}
`;

export const SlidersContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: raw;
  position: relative;
  width: 60%;
  ${mediaMobile(`
width: 95%;
`)}
`;
export const SliderItemPreviews = styled.div`
width: 4%,
marginTop: 20px,
margin-right: 5px,
cursor: pointer,
display: inline-block,
// ${mediaMobile(`
// width: 9%;
// `)}
`;
export const SliderItemMain = styled.div`
width: 95%,
marginTop: 20px,
marginRight: 20px,
box-sizing: border-box,
cursor: zoom-in,
display: inline-block,
// ${mediaMobile(`
// width: 90%;
// `)}
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mediaMobile(`
  width: 95%;
`)}
`;

export const Image = styled.div`
background: url(${props => [props.img1]}) no-repeat;
background-size: contain;
&:hover {
background: url(${props => [props.img2]}) no-repeat;
background-size: contain;
}
${mediaTablet(`
    width: 70%;
`)}
   ${mediaMobile(`
   width: 60%;
`)}

  ${props =>
    props.size === "small" &&
    css`
      width: 200px;
      height: 200px;
      ${mediaTablet(`
        width: 117px;
        height: 117px;
`)}
      ${mediaMobile(`
         width: 117px;
        height: 117px;
`)}
    `}
    ${props =>
      props.size === "xSmall" &&
      css`
        width: 103px;
        height: 129px;
        @media (max-width: 992px) {
          width: 206px;
          height: 258px;
        }
        @media (max-width: 767px) {
          width: 156px;
          height: 208px;
        }
        @media (max-width: 439px) {
          width: 150px;
          height: 202px;
        }
      `}
`;
export const Name = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  line-height: 40px;
  width: 100%;
  @media (max-width: 992px) {
    font-size: 20px;
  }

  ${props =>
    props.line === "true" &&
    css`
      &:after {
        content: " ";
        display: flex;
        align-self: center;
        margin-top: 11px;
        width: 100%;
        height: 1px;
        background: #3c3b3b;
      }
    `}
  ${props =>
    props.size === "small" &&
    css`
      font-size: 16px;
      line-height: 21px;
      text-align: center;

      @media (max-width: 992px) {
        font-size: 14px;
      }
      @media (max-width: 767px) {
        font-size: 12px;
        margin-bottom: 5px;
      }
    `}
`;
export const Vendor = styled.p`
  margin-top: 25px;
  font-size: 14px;
  color: #a1a5ad;
`;
export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const Price = styled.div`
  margin-top: 25px;
  font-size: 16px;
  line-height: 21px;
  &:after {
    content: "UAH";
    margin-left: 5px;
    display: inline;
    font-size: 12px;
  }
  ${props =>
    props.size === "small" &&
    css`
      justify-self: flex-end;
    `};
  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 439px) {
    font-size: 12px;
  }
`;
export const WishWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 30px;
  ${props =>
    props.item === true &&
    css`
      padding-right: 3px;
      width: 100%;
      height: auto;
      justify-content: flex-end;
    `}
`;
export const WishButton = styled.span`
  font-size: 14px;
  padding-bottom: 4px;
  padding-right: 3px;
`;
export const Heart = styled.button`
  bottom: -2px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #262c37;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const HeartRose = styled.button`
  bottom: -2px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #ff8fbc;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const Add = styled.button`
  margin-top: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
  background-color: #002d50;
  border: 1px solid #002d50;
  width: 100%;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  ${props =>
    props.size === "small" &&
    css`
      width: 50px;
    `}
`;
export const Details = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  padding-top: 21px;
  width: 100%;
  &:before {
    content: " ";
    display: flex;
    align-self: center;
    margin-bottom: 21px;
    width: 100%;
    height: 1px;
    background: #3c3b3b;
  }
`;
export const UL = styled.ul`
  align-self: flex-start;
  list-style: none;
`;
export const LI = styled.li`
  text-transform: capitalize;
  margin-top: 8px;
  margin-left: 8px;
  line-height: 21px;
  &:before {
    content: "•";
    margin-right: 8px;
    margin-left: -8px;
    color: #a7aabb;
  }
`;
