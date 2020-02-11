import React, {useState,useLayoutEffect, useEffect}from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import axios from "axios"

import {HeaderMenuElem} from "../navy/dropMenu";

// import  "./styles.css";



export const Navigation  = () => {
  
//     const [categoriesAllData, setCategoriesAllData] = useState([]);
//  useLayoutEffect(()=>{
       
      
//         axios
//             .get("http://localhost:5000/catalog")
//             .then(result  => {
//                 console.log("Secsess ");
                  
//                 setCategoriesAllData(result.data)
             
//             })
//             .catch(err => {
//               /*Do something with error, e.g. show error to user*/
//             });            

//     },[])

 
    const newCategory = {
        id: "Jewelry",
        name: "Jewelry",
        parentId: "null",
        imgUrl: " ",
        description: "A category, of earrings",
        level: 0
      };


    // useEffect
    
    // const arreyCategiries =(data)=> {
    //     console.log(data)
    //     let Arrey =data.filter(item => item.parentId === "null");

    //     console.log(Arrey)
    //     // categElem = Arrey.map(item =>{
    //     //     return (
    //     //     <p key={item._id}>{item.name}</p>

    //     //     )}                     
    //     //     )
    //     setCategoriesData(Arrey)
        
    // }
    // let menuArrey =categoriesAllData.filter(item => item.parentId != "null");
    // let menuEll = menuArrey.map(item=>{
    //     return(
    //         <li key={item._id}>
    //             {item.name}
    //         </li>
    //     )

    // })
    const DataToServer = ()=>{
        axios
            .post("http://localhost:5000/customers/login", { "loginOrEmail": "customer@gmail.com", "password": "1111111" })
            .then(response => {
            /*Do something with newProduct*/
            let token = response.data.token;

            axios
                .post("http://localhost:5000/catalog", newCategory, { headers: { "Authorization": `${token}` } })
                .then(newProduct => {
                /*Do something with newProduct*/
                console.log(newProduct);
                })
                .catch(err => {
                /*Do something with error, e.g. show error to user*/
                });
            // axios
            // .delete("http://localhost:5000/catalog/Rin",{ headers: { "Authorization": `${token}` } } )
            // .then(result  => {
            //     console.log(result );
            // })
            // .catch(err => {
            //   /*Do something with error, e.g. show error to user*/
            // });

            })
            .catch(err => {
            /*Do something with error, e.g. show error to user*/
            });
            }
 


    return (
        // <div>
        <HeaderMenu className="navy">            
             {HeaderMenuElem}
        </HeaderMenu>
        
        // </div>
    )   
};

const HeaderMenu = styled.div`{
    font-family: Montserrat;
    display: flex;
    width: 100%;
    justify-content: center;
    .headerLink{
        margin-right: 110px;
        text-decoration: none;
        color: black;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        & ul{
            display: block;
            background-color:#FFFFFF;
            position: absolute;
            background-color: white;
            height: 150px;
            z-index: 1;
            & li{
                list-style-type:none;
                text-transform: capitalize;
               
               
            }
        }
       

    }
    
}`;
const Menu = styled.ul