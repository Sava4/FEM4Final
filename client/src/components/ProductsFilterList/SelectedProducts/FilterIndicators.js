import React from "react";

import { connect } from "react-redux";

import styled from "styled-components";
// Store functions

import { SelectedFilters } from "./SelectedFilters";

import createKey from "../index";

const mapStateToProps = store => ({
  filters: store.filters
});

export const FilterIndicators = connect(mapStateToProps)(props => {
  const filters = props.filters.filters
  
  let filtrefBy = [];

  for (let key in filters) {
    filtrefBy.push(key);
  }
  const filtredByBlocks = filtrefBy.map(item => {
    const selectedFilters = filters[item];
     console.log(selectedFilters)
    let itemClass = item.replace(" ", "");

    return ( 
      <FilterMarker key={createKey.toString()}>
        <p>{item}</p>
        <SelectedFiltersStyled className={itemClass}>
          {/* <SelectedFilters selectedFilters={selectedFilters} /> */}
        </SelectedFiltersStyled>
      </FilterMarker>
    );
  });

  function handleClick(event) {
    event.preventDefault();
    const filt = props.filters;
    console.log(filt)
  }

    const items =filters.map(item=> <div>{item}</div>)
  return  <FilterTypeDiv>{filtredByBlocks}</FilterTypeDiv>;
});

const FilterTypeDiv = styled.div`
  display: flex;

  & p {
    margin: 0;
    color: lightgrey;
    text-transform: capitalize;
  }
`;
const FilterMarker = styled.div`
  margin-left: 5px;
`;
const SelectedFiltersStyled = styled.div`
  display: flex;
`;
