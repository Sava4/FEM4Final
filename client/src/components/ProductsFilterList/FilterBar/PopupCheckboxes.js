import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import styled from "styled-components";
// Store functions
import { setCheckFilter } from "../../../store/filters";

import createKey from "../index";

const mapStateToProps = store => ({
  filters: store.filters.filters
});

export const PopupCheckboxes = connect(mapStateToProps, )(
  props => {
    // console.log(props)

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

    //   const handleChange = (event, nodes) => {
    //     setExpanded(!expanded);
    //     console.log(expanded)
    //   };

    const getCheckedCheckBoxes = e => {
      let activeFilters = {};
      const checkboxes = document.querySelectorAll("input[type='checkbox'] ");
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          let key = checkboxes[i].className;

          if (key in activeFilters) {
            activeFilters[key].push(checkboxes[i].name);
          } else {
            activeFilters[key] = [];
            activeFilters[key].push(checkboxes[i].name);
          }
        }
      }
      console.log(props);
    
      // console.log(activeFilters[e.target.className]);
      //проверка путой массив или нет
      // function isEmpty(obj) {
      //   for (let key in obj) {
      //     if (key) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   }
      // }

      //   isEmpty(activeFilters) ?  (activeFilters = activeFilters) : (activeFilters = activeFilters)
      // props.setfilterList(activeFilters);
    };

    const collectionList = products && filter(products, filtername);

    const inputs = collectionList.map(item => {
      return (
        <CheckboxDiv key={createKey().toString()}>
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

    return <form onChange={getCheckedCheckBoxes}>{inputs}</form>;
  }
);

const CheckboxDiv = styled.div`
  margin-bottom: 20px;
`;

const Labels = styled.label`
  font-size: 14px;
  text-transform: capitalize;
`;
