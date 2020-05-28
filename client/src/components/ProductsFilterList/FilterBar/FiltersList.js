import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";
import { setTogleShown } from "../../../store/filters";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PriсeRange } from "./PriсeRange";
import { PopupCheckboxes } from "./PopupCheckboxes";


export const FiltersList = props => { 
  const dispatch = useDispatch();
  const  filtersBlockState = useSelector(state=>state.filters.menuState) 
  const {filtredBy} = props;

  const handleChange = (e, nodes) => {
    e.preventDefault();
    dispatch (setTogleShown(e.target.parentNode.id));
  };

  let filters = filtredBy.map(item => {
    let isShown = filtersBlockState[item];
    return (
      <FilterBox key={v4()}>
        <FilterType id={item}>
          <p onClick={handleChange} >{item.replace("_", " ")}</p>
          {isShown ? (
            <ExpandLessIcon fontSize="default" onClick={handleChange} />
          ) : (
            <ExpandMoreIcon fontSize="default" onClick={handleChange} />
          )}
        </FilterType>
        {isShown ? (
          item === "price" ? (
            <PriсeRange />
          ) : (
            <PopupCheckboxes filtername={item} />
          )
        ) : (
          false
        )}
      </FilterBox>
    );
  });

  return <>{filters}</>;
};

const FilterBox = styled.div`
  height: fit-content;
  border-bottom: 1px solid #e9ebf5;
`;
const FilterType = styled.div`
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  margin: 0px;
  & > p {
    font-size: 14px;
    text-transform: uppercase;
    width: 100%;
    text-align: left;
    cursor:pointer;
  }
`;
