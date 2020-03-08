import React from "react";
import { connect } from "react-redux";
import {v4} from "uuid";
import styled from "styled-components";

import createKey from "../index";

import { setDeleteFilter } from "../../../store/filters";

const mapStateToProps = store => ({
  filters: store.filters
});

export const SelectedFilters = connect(mapStateToProps, { setDeleteFilter })(
  props => {
    const { selectedFilters } = props;
    console.log(selectedFilters);
    

    const HandleClick = e => {
      const remoteFilter = e.target.parentNode;
      
      const nameRemoteFilter = selectedFilters[remoteFilter.getAttribute("data")]
                  
      let parentFilterName =
        remoteFilter.parentNode.classList[
          remoteFilter.parentNode.classList.length - 1
        ];

        let removedEll = {};
        removedEll[parentFilterName] = nameRemoteFilter;

        props.setDeleteFilter(removedEll)
        
        console.log( removedEll);
      

      // const arrayToFilter = props.filters[parentFilterName];
      // const newFilterArray = arrayToFilter.filter(
      //   item => item.replace(/ /g, "") !== nameRemoteFilter
      // );
      // console.log(newFilterArray);
      // const renewedFIlterObj = {};
      // renewedFIlterObj[parentFilterName] = newFilterArray;

      // props.setfilterList(renewedFIlterObj);
   
    };


    const selectedFiltersBlocks = selectedFilters.map((item, index) => {
      let itemClass = item.replace(/ /g, "");

      return (
        <ExectFilter className={itemClass} data = {index} key={v4()}>
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
