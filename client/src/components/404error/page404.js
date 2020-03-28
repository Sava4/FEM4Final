import React from 'react';
import styled, {css} from 'styled-components';

export const Page404 = () => {

    return(
        <Container>
            <Error404 size='big'>404</Error404>
            <Error404 size='medium'>Oops... We can't find anything.</Error404>
        </Container>
    )
};

const Container = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
`;

const Error404 = styled.p`
   text-align: center;
   font-size: 20px;
   color: #4d4d4d;
    
    ${props => props.size === 'big' && css`
    font-size: 40px;
    margin: 20px;
    `}
    
     ${props => props.size === 'medium' && css`
    font-size: 25px;

    `}
  
`;