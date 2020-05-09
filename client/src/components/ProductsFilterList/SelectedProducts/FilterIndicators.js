import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

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
        <p>{item.replace("_", " ")}</p>
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
  margin-left: 1% ${mediaMobile(`
  margin-top: 11px;  
`)} & p {
    font-size: 14px;
    margin: 0;
    color: #a1a5ad;
    text-transform: capitalize;
  }
`;
const FilterMarker = styled.div`
  margin-left: 5px;
  ${mediaMobile(`
  width:fit-content;
`)}
`;
const SelectedFiltersStyled = styled.div`
  flex-wrap: wrap;
  display: flex;
`;
