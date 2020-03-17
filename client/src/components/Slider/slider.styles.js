import styled from "styled-components";
import {mediaMobile} from "../../styled-components/media-breakpoints-mixin";

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
`;
export const CarouselImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 425px;
  opacity: 1;
  
  ${mediaMobile(`
  background-position: right;
  `)}
`;
