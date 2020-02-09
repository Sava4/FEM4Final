import React from "react";

import styled from "styled-components";

const components = ["Rings", "Earrings", "Nucleces", "Pendants", "Chains"];

export const DropMenu = () => {

    //  const CategoriesList = styled.li`
    // {
    //     height:712px;
    //     width: 100vw;
    //     & p{            
    //         text-align: center;
    //     }
    // }`
   const Categories = styled.li`
        {
       list-style-tipe: none
        }
    `;
    const dropMenuEl = components.map(item => (
    <Categories>{item}</Categories>
    ))
    return (
        <ul>
            {dropMenuEl}
          
        </ul>
        
    )  
   
    
}