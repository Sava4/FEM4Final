// import React, { useState, Fragment } from "react";
// import { useSelector } from "react-redux";
// import styled, { css } from "styled-components";
//
// export const FavoritesButton = (props) => {
//     const favoritesId = useSelector(state => state.favorites.favArr);
//     console.log(props.id);
//
//     const FavoriteId = favoritesId.filter(id => {
//         console.log(id);
//         return props.id === id;
//     });
//     const FavoriteButton = () => {
//         return FavoriteId.length > 0 ? (
//             <WishWrapper item={true}>
//                 <HeartRose>&#9825;</HeartRose>
//             </WishWrapper>
//         ) : (
//             <WishWrapper item={true}>
//                 <Heart>&#9825;</Heart>
//             </WishWrapper>
//         );
//     };
//
//     return (
//         <FavoriteButton/>
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
