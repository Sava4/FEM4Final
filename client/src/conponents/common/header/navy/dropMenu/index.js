import React, {useState,useLayoutEffect, useEffect}from "react";
import axios from "axios";

import styled from "styled-components";
import {Dropmenu} from "../dropMenu/dropmenu"


// import categories from "./getCategoriesArray"

// const components =()=> axios
//     .get("http://localhost:5000/catalog")
//     .then(result  => {
//         console.log("Secsess ");
//         console.log(result.data) 
//         return (result.data)
     
//     })
//     .catch(err => {
//       /*Do something with error, e.g. show error to user*/
//     }); 
//     const menuArrey = components();
//     console.log(menuArrey)

export const HeaderMenuElem = (props) => {

    
    const {categories}=props;
    // console.log(categories) 
    const [isOpen, setIsOpen] = useState(false);
    
    // const ShowDropMenu = (e)=>{
        
    //     setIsOpen(!isOpen)
    //         }

    let categArrey =categories.filter(item => item.parentId === "null");
    
     
           const categList = categArrey.map(item=>{
            const menuName = item.name;
            console.log(item.name)  
            let dropMenuArrey =categories.filter(item => item.parentId === `${menuName}`); 
            // console.log(dropMenuArrey)  
                return(
                <li key={item._id}  className="headerLink" >
                    {/* <Dropmenu categories={categories}/>  */}
                    <Dropmenu dropMenuArrey={dropMenuArrey}/>
                </li>
                     
                    
                    )  
            })
       return( 
       <Categories>{categList}</Categories>
       )
      
};

const Categories = styled.ul`
        {
            display:flex;
       list-style-type: none;
        }
    `;