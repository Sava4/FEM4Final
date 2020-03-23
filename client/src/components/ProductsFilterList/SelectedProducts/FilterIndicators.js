import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import styled from "styled-components";

import { SelectedFilters } from "./SelectedFilters";

const mapStateToProps = store => ({
  filters: store.filters.selFilters
});

export const FilterIndicators = connect(mapStateToProps)(props => {
  const filters = props.filters;

  let filtrefBy = [];
  for (let key in filters) {
    filtrefBy.push(key);
  }

  const filtredByBlocks = filtrefBy.map(item => {
    // const selectedFilters = filters[item];

    let itemClass = item.replace(" ", "");

    let selectedFilters = filters[item];
    return selectedFilters.length ? (
      <FilterMarker key={v4()}>
        <p>{item}</p>
        <SelectedFiltersStyled className={itemClass}>
          <SelectedFilters selectedFilters={selectedFilters} />
        </SelectedFiltersStyled>
      </FilterMarker>
    ) : null;
  });

  return <FilterTypeDiv>{filtredByBlocks}</FilterTypeDiv>;
});

const FilterTypeDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: content;
  & p {
    font-size: 14px;
    margin: 0;
    color: #a1a5ad;
    text-transform: capitalize;
  }
`;
const FilterMarker = styled.div`
  margin-left: 5px;
`;
const SelectedFiltersStyled = styled.div`
  flex-wrap: wrap;
  display: flex;
`;
