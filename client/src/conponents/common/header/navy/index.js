import React, {useState,useLayoutEffect, useEffect}from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import axios from "axios"

import {HeaderMenuElem} from "./dropMenu";
// import categories from "./dropMenu/getCategoriesArray"


// import  "./styles.css";



export const Navigation  = () => {
    const [categoriesAllData, setCategoriesAllData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [dropmenuData, setDropmenuData] = useState([]);

    const newCategory = {
        id: "Brooches",
        name: "Brooches",
        parentId: "Engagement",
        imgUrl: " ",
        description: "A category, of earrings",
        level: 0
      };

      useLayoutEffect(()=>{
       
      
        axios
            .get("http://localhost:5000/catalog")
            .then(result  => {
                console.log("Secsess ");
                console.log(result.data);  
                setCategoriesAllData(result.data)
                
            })
            .catch(err => {
              /*Do something with error, e.g. show error to user*/
            });            

    },[])

    const categories = (categoriesAllData) && categoriesAllData;  

    console.log(categories);
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
            console.log(token);
            axios
                .post("http://localhost:5000/catalog", newCategory, { headers: { "Authorization": `${token}` } })
                .then(response => {
                /*Do something with newProduct*/
                console.log(response);
                })
                .catch(err => {
                    console.log("Не добавлена категория");
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
    const ShowDropMenu = (e)=>{
        console.log(e.target)
        setIsOpen(!isOpen)
            }

    let categArrey =categoriesAllData.filter(item => item.parentId === "null");
    const NavyEll = categArrey.map(item=>{
      
        const menuName = item.name;
        let menuArrey =categoriesAllData.filter(item => item.parentId === `${menuName}`);
        let menuEll = menuArrey.map(item=>{
            return(
                <li key={item._id} >
                    {item.name}
                </li>
            )
    
        })
       return(
       <p key={item._id} className="headerLink" onClick={DataToServer}>{item.name}
            {(isOpen) && (
               <ul>
                 {menuEll}
            </ul> 
            )}
       </p>
       
       )
   })


    return (
        // <div>
        <HeaderDropMenu className="navy">            
             {NavyEll}
             {/* <HeaderMenuElem categories={categories}/> */}
        </HeaderDropMenu>
        
        // </div>
    )   
};

const HeaderDropMenu = styled.div`{
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
            width: 100vw;
            z-index: 1;
            & li{
                list-style-type:none;
                text-transform: capitalize;
               
               
            }
        }
       

    }
    
}`;
const Menu = styled.ul
