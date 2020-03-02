import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import createKey from "../index";

import { setfilterList } from "../../../store/filters";

const mapStateToProps = store => ({
  filters: store.filters
});

export const SelectedFilters = connect(mapStateToProps, { setfilterList })(
  props => {
    const { selectedFilters } = props;
    // console.log(selectedFilters);

    const HandleClick = e => {
      const remoteFilter = e.target.parentNode;
      // for (let i = 0; remoteFilter.classList.length)
      const nameRemoteFilter =
        remoteFilter.classList[remoteFilter.classList.length - 1];
      //   console.log(nameRemoteFilter);
      let parentFilterName =
        remoteFilter.parentNode.classList[
          remoteFilter.parentNode.classList.length - 1
        ];

      const arrayToFilter = props.filters[parentFilterName];
      const newFilterArray = arrayToFilter.filter(
        item => item.replace(/ /g, "") !== nameRemoteFilter
      );
      console.log(newFilterArray);
      const renewedFIlterObj = {};
      renewedFIlterObj[parentFilterName] = newFilterArray;

      props.setfilterList(renewedFIlterObj);
      // )
    };

    const selectedFiltersBlocks = selectedFilters.map(item => {
      let itemClass = item.replace(/ /g, "");

      return (
        <ExectFilter className={itemClass} key={createKey()}>
          <p>{item}</p>
          <span onClick={HandleClick}>Х</span>
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
  }
  & span {
    cursor: pointer;
  }
`;
