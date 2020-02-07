import React from "react"
// import styled from "styled-components"

import {Layout} from "../common/layout";
import {HomepageCategiries} from "../homePage/categories";

export const Homepage = () => {
//     const SectionCategiries = styled.div`
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
    return (
        <Layout>
            <div className="categories">
                 <HomepageCategiries></HomepageCategiries>       
            </div>
            
        </Layout>
        
    )   
}