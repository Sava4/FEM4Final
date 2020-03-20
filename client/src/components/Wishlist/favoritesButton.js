// import React, { useState, Fragment } from "react";
// import { useSelector } from "react-redux";
// import styled, { css } from "styled-components";
//
// export const FavoritesButton = (...props) => {
//     const favoritesId = useSelector(state => state.favorites.favArr);
//     console.log(favoritesId);
//     console.log(props.id);
//     const FavoriteId = favoritesId.map(id => {
//         return (
//             id === props.id
//                 ?
//                 <Fragment>
//                 <WishWrapper>
//                     <WishButton>Add to wish list</WishButton>
//                     <HeartRose>&#9825;</HeartRose>
//                 </WishWrapper>
//                 </Fragment>
//                 :
//                 <Fragment>
//                 <WishWrapper>
//                     <WishButton>Add to wish list</WishButton>
//                     <Heart>&#9825;</Heart>
//                 </WishWrapper>
//                 </Fragment>
//                     )
//     });
//
//     return (
//         <Fragment>
//             <WishWrapper>
//                 <WishButton>Add to wish list</WishButton>
//                 <HeartRose>&#9825;</HeartRose>
//             </WishWrapper>
//         </Fragment>
//     );
// };
//
// //*** STYLED-COMPONENTS ***//
//
// export const WishWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   width: 135px;
//   height: 30px;
// `;
// export const WishButton = styled.span`
//   font-size: 14px;
//   padding-bottom: 4px;
// `;
// export const Heart = styled.button`
//   position: relative;
//   bottom: -2px;
//   background: transparent;
//   border: none;
//   font-size: 24px;
//   color: #262c37;
//   cursor: pointer;
//
//   &:focus {
//     outline: none;
//   }
// `;
// export const HeartRose = styled.button`
//   position: relative;
//   bottom: -2px;
//   background: transparent;
//   border: none;
//   font-size: 24px;
//   color: #ff8fbc;
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
// `;
//
