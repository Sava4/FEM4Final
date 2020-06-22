import React from "react";
import { useDispatch} from "react-redux";
import { v4 } from "uuid";
import PropTypes from 'prop-types';
import styled from "styled-components";

import { setDeleteFilter } from "../../../store/filters";


export const SelectedFilters = props => {
    const { selectedFilters , filterGroup} = props;
    const dispatch = useDispatch()


    const HandleClick = e => {
      console.log(e.target)
      const remoteFilter = e.target.parentNode;      
      const nameRemoteFilter = selectedFilters[remoteFilter.getAttribute("data-index")];
      let parentFilterName =remoteFilter.getAttribute("data-filterGroup");
      let removedEll = {};
      removedEll[parentFilterName] = nameRemoteFilter; 
      dispatch(setDeleteFilter(removedEll));
    };

    const selectedFiltersBlocks = (selectedFilters || []).map((item, index) => {
      return (
        <ExectFilter data-index={index} 
                    data-filterGroup={filterGroup}                    
                    key={v4()}>
          <p>{item}</p>
          <span onClick={HandleClick}>&#10005;</span>
        </ExectFilter>
      );
    });

    return (
      <div>
        {selectedFiltersBlocks}
      </div>
    )
  };

  // SelectedFilters.propTypes = {
  //   selectedFilters: PropTypes.array.isRequired

  // }

const ExectFilter = styled.div`
  display: flex;
  justify-content: space-between;
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
