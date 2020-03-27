import React, {useState} from "react";
import * as storeDate from "./data/{...}zarina-stores";
import styled from "styled-components";

export const AddressesSelect =() => {
    const Cities = storeDate.features.map(store => (
        <OptionCity
            key={store.properties.STORE_ID}
            city={store.properties.CITY}
        />));
    return (
        <div className="App">
            <Select>
                {Cities}
            </Select>
        </div>
    )
};
const OptionCity = props => {
    return(
     <Option key={props.key}>{props.city}</Option>
    )
} ;
const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
`;
const Option = styled.option`
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
`;