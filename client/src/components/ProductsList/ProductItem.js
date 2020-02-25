import React from 'react';
import {Image, Name, Price} from "../ProductDetails/ProductDetails";

import styled from "styled-components";

export const ProductItem = (props) => {
    return (
        <Card key={props.id}>
            <Image alt="" src={ props.img } size={"small"}/>
            <Name size={"small"}>{`${ props.name } "${ props.collection }"`}</Name>
            <Price size={"small"}>{ props.currentPrice }</Price>
        </Card>
    )
};

//*** STYLED-COMPONENTS ***//

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 32%;
    height: 350px;
    @media(max-width: 1050px) {
     
    }
    @media(max-width: 992px) {
       width: 43%;
       align-items: space-between;
       
    }
    @media(max-width: 767px) {
       align-items: space-between;
       width: 43%;
       
    }
    @media(max-width: 439px) {
        width: 43%;
        
    }
`;

