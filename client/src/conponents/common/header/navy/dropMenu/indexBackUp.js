mport React, {useState,useLayoutEffect, useEffect}from "react";
import axios from "axios";

import styled from "styled-components";
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
    const {categories} =props;
    console.log(props) 
    const [isOpen, setIsOpen] = useState(false);
    
    const ShowDropMenu = (e)=>{
        console.log(e.target)
        setIsOpen(!isOpen)
            }

    let categArrey =props.filter(item => item.parentId === "null");
    const NavyEll = categArrey.map(item=>{
         console.log(item)
        const menuName = item.name;
        let menuArrey =props.filter(item => item.parentId === `${menuName}`);
        let menuEll = menuArrey.map(item=>{
            return(
                <li key={item._id}>
                    {item.name}
                </li>
            )
    
        })
       return(
       <p key={item._id} className="headerLink" onClick={ShowDropMenu}>{item.name}
            {(isOpen) && (
               <ul>
                 {menuEll}
            </ul> 
            )}
       </p>
       
       )
   })
    
   
    
};
// const Categories = styled.li`
//         {
//        list-style-tipe: none
//         }
//     `;