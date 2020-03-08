import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {v4} from "uuid";

import styled from "styled-components";

import { setfilterList } from "./../../../store/filters";
import {setDeleteFilter} from "./../../../store/filters";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import createKey from "../index";
import { PopupCheckboxes } from "./PopupCheckboxes";

const mapStateToProps = store => ({
  filters: store.filters
});

export const FiltersList = connect(mapStateToProps, {setfilterList, setDeleteFilter})(
  props => {
    
    const filtredBy = [
      "collection",
      "metal",
      "metal_color",
      "gemstone",
      "gemstone_color"
    ];

    useEffect(()=>{
      filtredBy.forEach(item =>{
        const state ={
          filterType:item,
          names: [],
          isShown: false 
        }
       
      
    })
// props.setfilterList("collection","state")
    },[])
    // для работы с локальным стейтом
    const inState = [
      {
          name: "collection",
          active: true
        },
        {
          name: "metal",
          active: true
        },
        {
          name: "metal_color",
          active: true
        },
        {
          name: "gemstone",
          active: true
        },
        {
          name: "gemstone_color",
          active: true
        }
      ]

    const [presState, setState] = useState(inState)
    const handleChange = (e, nodes) => {
      e.preventDefault();
      console.log(e.target.parentNode.id);
           
      // для локального стейта
      const newState =[];
        presState.forEach(item =>{
              const stateObj ={}
              stateObj.name =item.name;
              stateObj.active = (item.name === e.target.parentNode.id) ? (item.active = !item.active) : (item.active=item.active);
              newState.push(stateObj)
            }
             );
             setState(newState)
      // для стора
      // const newState = [];
      // props.filters.filters.forEach((item, index) => {
       
        // const stateObj = {};
        // if (item.filterType=== e.target.parentNode.id) {
          
        //   stateObj.filterType = item.filterType;
        //   stateObj.names = item.names;
        //   stateObj.fisShown = !item.isShown 
        
        }
        // console.log(stateObj)
        
        //  });
        // props.setIsShown(e.target.parentNode.id) 
        // props.filters.filters.forEach(item => console.log(item.filterType));

    let filters = filtredBy.map((item, index) => {
      
      // для локального стейта
      const isShown = presState[index].active;
      //для стора
      // const filterName = item;
      // let isShown = null;
      // props.filters.filters.map(item => {if (item.filterType === filterName) { isShown = item.isShown}});
      // console.log(isShown)
      return (
        <FilterBox key={v4()}>
          <FilterType id={item}>
            <p>{item} </p>
            {!isShown && (
              <ExpandMoreIcon fontSize="small" onClick={handleChange} />
            )}
            {isShown && (
              <ExpandLessIcon fontSize="small" onClick={handleChange} />
            )}
          </FilterType>
          <CheckboxBlock isOpen={isShown}>
                <PopupCheckboxes filtername={item} />
          </CheckboxBlock>
        </FilterBox>
      );
    });

    return <div>{filters}</div>;
  }
);

const CheckboxBlock = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
`;

const FilterBox = styled.div`
  border-bottom: 1px solid lightgrey;
  

`;
const FilterType = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    font-size: 14px;
    text-transform: uppercase;
    margin: 0;
    margin-right: 20px;
    padding-bottom: 31px;
  }
`;
