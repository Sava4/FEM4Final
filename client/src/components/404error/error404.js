import React from 'react';
import styled, {css} from 'styled-components';
import Bear from '../../img/error404/bear.png';
import { HomepageCategories } from "../homePage/categories/index";

export const Error404 = () => {

    return(
        <Container>
            <Error size='big'>404</Error>
            <Error size='medium'>Ooooops... We can't find anything</Error>
            <HomepageCategories/>
        </Container>
    )
};

const Img404 = styled.img`
    display: inline-block;
    width: 300px;
`;

const Container = styled.div`
 
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    
    @media(max-width: 1200px) {
        max-width: 1024px;
    }
    @media(max-width: 1050px) {
        max-width: 991px;
    }
    @media(max-width: 992px) {
        max-width: 768px;
    }
    @media(max-width: 767px) {
        max-width: 540px;
    }
`;

const Error = styled.p`
   margin-block-start: 0;
   margin-block-end: 0;
   text-align: center;
   font-size: 20px;
   color: #1e4784;
    
    ${props => props.size === 'big' && css`
    margin-top: 15px;
    font-size: 70px;
    `}
    
     ${props => props.size === 'medium' && css`
    font-size: 45px;
    grid-column: 2/6;
    margin-bottom: -25px;
    @media(max-width: 992px) {
        font-size: 35px;
    }
    @media(max-width: 767px) {
        font-size: 25px;
    }
    `}
  
`;