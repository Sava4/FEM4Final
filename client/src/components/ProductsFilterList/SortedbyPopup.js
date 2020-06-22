import React from "react";
import styled from "styled-components";
import dropArrow from "./images/DroppArrow.png";

export const SortedbyPopup = props => {
  const { setSortType, setIsOpenSortedPopup } = props;

  const selectAction = e => {
    setSortType(e.target.value);
    setIsOpenSortedPopup(false);
  };

  return (
    <MoadalContainer>
      <StyledSelect onChange={selectAction}>
        <option default>Choose sort type</option>
        <option value="price Increase">Price increase</option>
        <option value="price Decrease">Price decrease</option>
      </StyledSelect>
    </MoadalContainer>
  );
};

const MoadalContainer = styled.div`
  line-height: 20px;
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
