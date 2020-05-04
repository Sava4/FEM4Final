import styled from "styled-components";
import {
  mediaMobile,
  mediaTablet
} from "../../styledComponents/MediaBreakpointsMixin";

export const CarouselWrapper = styled.div`
  ${mediaMobile(`
 .slick-dots {
  position: inherit;
  padding-bottom: 10px;
  border-bottom: 1px solid #002D50;
 }
 `)}
`;

export const SliderPromo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 452px;
  height: 100%;
  margin-left: 130px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  opacity: 0.9;

  ${mediaMobile(`
  display: none;
  `)}
`;

export const SliderPromoMobile = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  opacity: 0.9;

  ${mediaMobile(`
  height: 120px;
  display: flex;
  align-items: baseline;
  `)}
`;

export const SliderPromoText = styled.div`
  width: 60%;
  background-color: #ffffff;
  opacity: 0.8;
  font-size: 17px;
  color: black;
  line-height: 30px;
  letter-spacing: 1px;
  margin-bottom: 100px;
  text-align: center;

  ${mediaMobile(`
  width: 100%;
  margin-bottom: 0;
  margin-top: 10px;
  `)}
`;

export const SliderPromoButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 275px;
  width: 280px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #262c37;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
  font-size: 14px;
  cursor: pointer;

  ${mediaTablet(`
  top: 240px;
  `)}

  ${mediaMobile(`
  top: auto;
  margin-top: 70px;
  `)}
`;
export const CarouselImage = styled.div`
  background: url(${props => process.env.PUBLIC_URL + props.imageUrl}) no-repeat;
  background-size: cover;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  opacity: 1;

  ${mediaTablet(`
  background-position: center;
  height: 345px;
  `)}

  ${mediaMobile(`
  background-position: center;
  height: 266px;
  `)}
`;
export const H4 = styled.h4`
  display: block;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-weight: normal;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 30px;
`;
