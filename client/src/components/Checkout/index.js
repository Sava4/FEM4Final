import React from "react";
import { Layout } from "../common/Layout";
import { CheckoutForm } from "./checkout";

// import styled from "styled-components"

export const Checkout = () => {
  return (
    <Layout>
      <CheckoutForm />
    </Layout>
  );
};
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
