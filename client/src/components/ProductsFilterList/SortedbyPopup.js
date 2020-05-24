import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";
import dropArrow from "./images/DroppArrow.png";

export const SortedbyPopup = (props) => {
  const { setSortType, setIsOpenSortedPopup } = props;
  const selectAction = (e) => {
    console.log(e.target);
    setSortType(e.target.value);
    setIsOpenSortedPopup(false);
  };
  return (
    <MoadalContainer>
      <form>
        <StyledSelect onChange={selectAction} defaultValue="Choose">
          <option value="priceIncrease">Price increase</option>
          <option value="priceDecrease">Price decrease</option>
        </StyledSelect>
      </form>
    </MoadalContainer>
  );
};

const MoadalContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StyledSelect = styled.select`
  font-family: Montserrat;
  border: none;
  margin-left: 25px;
  appearance: none;
  background: url(${dropArrow}) no-repeat right center;
  min-width: 115px;
  outline: 0;
  input[type="select"]:focus {
    border: none;
  }
`;
