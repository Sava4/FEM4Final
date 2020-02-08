import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Necklaces from "../../../img/homePage/categories/necklaces.png";
import Bracelets from "../../../img/homePage/categories/bracelets.png";
import Rings from "../../../img/homePage/categories/rings.png";
import Earrings from "../../../img/homePage/categories/earring.png"

// import "./style.css"



export const HomepageCategiries = () => {

    const SectionCategiries = styled.div`{
        height:712px;
        width: 1550px;
        & {            
            text-align: center;
            font-size: 24px;
        }
    }`;

   const Categories = styled.div`{
        font-family: Montserrat;
        font-size: 40px;
        display: grid;
        grid-template-columns:repeat(auto-fit, minmax(150px, 2fr));
        grid-gap: 5px;
        // grid-template-columns: repeat(, minmax(150px, 1fr));
        grid-template-areas:
        "neclases bracelets bracelets"
        "neclases rings earrings";
        & .earrings{
            grid-area:earrings;
        }
        & .neclases{
            grid-area:neclases;
        }
        & .bracelets{
            grid-area:bracelets;
        }
        & .rings{
            grid-area:rings;
        }
        & a{
            margin-left: 2px;
            text-decoration:none;            
            position: relative;
            & p{
                margin:0;
                color: black;
                position: absolute;
                bottom: 35px;
                right: 30px;
            }
            
        }
        & .neclases{
            background:url("${Necklaces}");
            background-size: contain;
                // width: 587px;
                height: 712px;
        }
        & .bracelets{
            background-image:url("${Bracelets}");
            width: 850px;
            height: 312px;
        }
       & .rings{
            background-image:url("${Rings}");
            width: 423px;
            height: 397px;           
        } 
        & .earrings{
            background-image:url("${Earrings}");
            width: 423px;
            height: 397px;
        }
        & .rings, .earrings, .bracelets, .neclases {
             background-repeat: no-repeat;
             background-size: cover;

        }

 }

    `; 
    return (
       
            <div className="categories">
            <SectionCategiries>
                <p>EXPLORE CATEGORIES</p>
                <Categories>
                    <NavLink to="categories" className="neclases">
                        <p>NECKLACES</p>
                    </NavLink>
                    {/* <div> */}
                        <NavLink to="categories" className="bracelets">
                            <p>BRACELETS</p>
                        </NavLink>
                        {/* <div> */}
                            <NavLink to="categories" className="rings">
                                <p>RINGS</p>
                            </NavLink>
                            <NavLink to="categories" className="earrings">
                                <p>EARRINGS</p>
                            </NavLink> 
                        {/* </div> */}
                    {/* </div> */}
                   
                    
                </Categories> 
            </SectionCategiries>            
            </div>
            
     
        
    )   
}