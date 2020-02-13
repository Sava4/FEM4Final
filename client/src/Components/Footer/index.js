import React from 'react';
import styled from 'styled-components';



// export const Footer = styled.footer`
// position: absolute;
// bottom: 0px;
// background-color: #002d50;
// width: 100%;
// height: 43px;
// `;

const FooterBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom: 0px;
background-color: #002d50;
width: 100%;
height: 43px;
`;
const FooterText = styled.div`
font-size: 12px;
font-family: Montserrat, sans-serif;
color: #FFFFFF;
`;




export const Footer = () => {
  return (
    <FooterBody>
      <FooterText>&copy; 2013-2020 ZARINA.UA All Rights</FooterText>
    </FooterBody>
  );
};

