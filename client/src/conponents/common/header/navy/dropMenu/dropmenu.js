import React, {useState} from "react"
// import {Layout} from "../common/layout"

// import styled from "styled-components"

export const Dropmenu = props => {
    const {dropMenuArrey} =props;
    
    const [isOpen, setIsOpen] = useState(false);
    console.log(dropMenuArrey)
    const ShowDropMenu = (e)=>{
           setIsOpen(!isOpen)
            }
    let categArrey =dropMenuArrey.filter(item => item.parentId != "null");
    console.log(categArrey)
  const header =(categArrey.length) ? categArrey[0].parentId : " ";  
    const dropMenu = (categArrey.length) && categArrey.map(item=> <li key={item._id}>{item.name}</li>
         )
    return (
        <div >
            <p onMouseOver={ShowDropMenu}>{header}</p>
            { isOpen && <ul onMouseLeave={ShowDropMenu}>
                            {dropMenu}
                    </ul>}
        </div>
            
            
        
    )  
     
}
//      const SectionCategiries = styled.div`
//     {
//         height:712px;
//         width: 100vw;
//         & p{            
//             text-align: center;
//         }
//     }`
//    const Categories = styled.div`
//         {
//         display: flex;
//         & div{
//             margin-left: 20px
//         }
//     `; 