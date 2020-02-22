import styled from "styled-components";

//компонент родитель создал, чтобы пробросить пропсами переменную url в запрос
export const LinkToStatic = styled.div`
  text-decoration: none;
`;

export const FooterMain = styled.div`
  display: flex;
  width: 100%;
  height: 377px;
  border-top: 11px solid;
  border-image: linear-gradient(
      90deg,
      #002d50 0%,
      #007395 69.91%,
      #bc243f 96.25%
    )
    100;
  box-sizing: border-box;
  position: absolute;
  margin-top: 40px;
`;
export const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 130px;
  margin-top: 30px;
`;
export const FooterInfoName = styled.div`
  margin: 0;
  display: flex;
  width: 600px;
  justify-content: space-between;
  justify-items: flex-start;
  font-size: 12px;
  & h4 {
    display: block;
    font-size: 14px;
  }
  & ul {
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
  }
  & li {
    margin-bottom: 16px;
  }
  & a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
export const FooterInfoSocial = styled.div`
  width: 330px;
  font-size: 12px;
  & h4 {
    display: block;
    font-size: 14px;
  }
  & ul {
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
  }
  & li {
    margin-bottom: 16px;
  }
`;
export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  background-color: #002d50;
  width: 100%;
  height: 43px;
`;
export const FooterText = styled.div`
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  color: #ffffff;
`;
