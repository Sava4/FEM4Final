import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";

import { setDeleteFilter } from "../../../store/filters";

const mapStateToProps = store => ({
  filters: store.filters
});

export const SelectedFilters = connect(mapStateToProps, { setDeleteFilter })(
  props => {
    const { selectedFilters } = props;

    const HandleClick = e => {
      const remoteFilter = e.target.parentNode;

      const nameRemoteFilter =
        selectedFilters[remoteFilter.getAttribute("data")];

      let parentFilterName =
        remoteFilter.parentNode.classList[
          remoteFilter.parentNode.classList.length - 1
        ];

      let removedEll = {};
      removedEll[parentFilterName] = nameRemoteFilter;

      props.setDeleteFilter(removedEll);

      console.log(removedEll);
    };

    const selectedFiltersBlocks = selectedFilters.map((item, index) => {
      return (
        <ExectFilter data={index} key={v4()}>
          <p>{item}</p>
          <span onClick={HandleClick}>&#10005;</span>
        </ExectFilter>
      );
    });

    return selectedFiltersBlocks;
  }
);

const ExectFilter = styled.div`
  display: flex;
  background: #eff5ff;
  padding: 5px;
  margin: 5px;
  & p {
    margin: 0;
    margin-right: 10px !important;
    color: black !important;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }
  & span {
    cursor: pointer;
  }
`;
