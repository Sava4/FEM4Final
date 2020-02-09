import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import {DropMenu} from "../navy/dropMenu"

// import  "./styles.css";



export const Navigation  = () => {
    
    const HeaderDropMenu = styled.div`{
        font-family: Montserrat;
        display: flex;
        width: 100%;
        justify-content: center;
        .headerLink{
            margin-right: 110px;
            text-decoration: none;
            color: black;
        }
    }`;

    return (
        <div>
        <HeaderDropMenu className="navy">            
            <NavLink className="headerLink"to="jewelry">JEWELRY</NavLink> 
            <NavLink className="headerLink"to="collections">COLLECTIONS</NavLink>
            <NavLink className="headerLink"to="engagement">ENGAGEMENT</NavLink>
            <NavLink className="headerLink"to="souvenirs">SOUVENIRS</NavLink>
            <NavLink className="headerLink"to="giftCards">GIFT CARDS</NavLink>
            <NavLink className="headerLink"to="sale">SALE</NavLink>
        </HeaderDropMenu>
        <DropMenu></DropMenu>
        </div>
    )   
}