import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {v4} from "uuid";

import styled from "styled-components";
// Store functions
import { setCheckFilter } from "../../../store/filters";
import {dispatchSetCheckFilter} from '../../../store/filters'

import createKey from "../index";

const mapStateToProps = store => ({
  filters: store
});

export const PopupCheckboxes = connect(mapStateToProps, {dispatchSetCheckFilter})(
  props => {
   

    const { filtername } = props;

    const [products, setProducts] = useState([]);

    const filter = (innerArrey, filterType) => {
      const collections = [];

      innerArrey.forEach(
        item =>
          !collections.includes(item[filterType]) &&
          collections.push(item[filterType])
      );

      return collections;
    };


    useLayoutEffect(() => {
      axios
        .get("http://localhost:5000/products")
        .then(result => {
          //   console.log("Secsess ");
          setProducts(result.data);
        })
        // .then(products => {
        //   setProducts (collectionList(products))
        //   console.log( products)
        // })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
        
    }, []);

    const checkedFilters = e =>{
      e.preventDefault();      
      
      let activeFilters = {};
      activeFilters[e.target.className] = e.target.value
      props.dispatchSetCheckFilter(activeFilters);
    }

 
    const collectionList = products && filter(products, filtername);

    const inputs =  collectionList.map(item => {
                    return (
                      <CheckboxDiv key={v4()}>
                        <input
                          type="checkbox"
                          name={item}
                          value={item}
                          className={filtername}
                        ></input>
                        <Labels fore={item}>{item} </Labels>
                      </CheckboxDiv>
                    );
                  });

 
    return <form onChange={checkedFilters}>{inputs}</form>;
  }
);

const CheckboxDiv = styled.div`
  margin-bottom: 20px;
`;

const Labels = styled.label`
  font-size: 14px;
  text-transform: capitalize;
`;
