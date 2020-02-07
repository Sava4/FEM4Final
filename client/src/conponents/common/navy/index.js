import React from "react";
import {NavLink} from "react-router-dom";

import  "./styles.css";

export const Navigation  = () => {
    return (
        <div className="navy">
        <NavLink to="jewelry">Jewelry</NavLink> 
        <NavLink to="collections">Collections</NavLink>
       <NavLink to="engagement">Engagement</NavLink>
       <NavLink to="souvenirs">Souvenirs</NavLink>
       <NavLink to="giftCards">Gift Cards</NavLink>
       <NavLink to="sale">Sale</NavLink>
        </div>
    )   
}