import styled from "styled-components";

export const SliderPromo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 452px;
  height: 100%;
  margin-left: 130px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  opacity: 0.9;
`;

export const SliderPromoText = styled.div`
  width: 70%;
  background-color: #ffffff;
  opacity: 0.8;
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  color: black;
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
  font-family: Montserrat, sans-serif;
  font-size: 14px;
`;
//без Localhost при возврате на страницу не грузит картинки
export const CarouselImage = styled.div`
  background: url(http://localhost:3000/${props => props.imageUrl}) no-repeat;
  height: 425px;
  opacity: 1;
`;
