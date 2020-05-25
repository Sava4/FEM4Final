import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";
import dropArrow from "./images/DroppArrow.png";

export const SortedbyPopup = (props) => {
  const { setSortType, setIsOpenSortedPopup, sortType} = props;
  // const typePlaceholder = sortType ? (`Sorted by ${sortType.toLowerCase()}`) : ('Choose sort type')
  const selectAction = (e) => {
    console.log(e.target.options[e.target.selectedIndex]);
    setSortType(e.target.value);
    setIsOpenSortedPopup(false);
  };
  
  return (
    <MoadalContainer >
     
        <StyledSelect onChange={selectAction} >
        <option default>Choose sort type</option>
          <option value="price Increase">Price increase</option>
          <option value="price Decrease">Price decrease</option>
        </StyledSelect>
   
    </MoadalContainer>
  );
};

const MoadalContainer = styled.div`
line-height:20px; 
`;

const StyledSelect = styled.select`
  font-family: Montserrat;
  border: none;
  margin-left: 25px;
  appearance: none;
  background: url(${dropArrow}) no-repeat right center;
  min-width: 135px;
  outline: 0;
  input[type="select"]:focus {
    border: none;
  }
`;
