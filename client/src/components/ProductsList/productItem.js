import React from "react";
import {NavLink} from "react-router-dom";
import { Image, Name, Price } from "../ProductDetails/productDetails";

import styled, { css } from "styled-components";


export const ProductItem = (props) => {
    return (
        <Card interpretation={props.interpretation} to={`/product-details/${props.id}`} key={props.key}>
            <Image alt="" src={props.img} size={"small"}/>
            <Name size={"small"}>{`${props.name}`}</Name>
            <Price size={"small"}>{props.previousPrice}</Price>
        </Card>
    );

};

const Card = styled(NavLink)`
    display: flex;
    padding-bottom: 10px;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 32%;
    height: 350px;
    text-decoration: none;
    color: #000;
    border: 1px solid #e9ebf5;
    &: hover {
    border: 1px solid #002d50;
    }
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
    
    ${props =>
    props.interpretation === "carousell" &&
    css`
      width: 300px;
    `};
`;

