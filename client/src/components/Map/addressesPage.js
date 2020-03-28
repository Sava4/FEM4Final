import React, { useState, Fragment, useEffect } from "react";
import Select from "react-select";
import {
  Berdychiv,
  BilaTserkva,
  Cherkasy,
  Chernivtsi,
  Dnipro,
  IvanoFrankivsk,
  Kharkiv,
  Kherson,
  Kremenchuh,
  KryviyRih,
  Kyiv,
  Lviv,
  Lytsk,
  Mykolaiv,
  Odessa,
  Rivne,
  Sumy,
  Zaporizhzhia
} from "./citiesContactsList";

import styled from "styled-components";

export const AddressesSelect = props => {
  const [state, setState] = useState([]);

  const Addresses = () => {
    if (state.value === "Kyiv") return <Kyiv />;
    if (state.value === "Bila Tserkva") return <BilaTserkva />;
    if (state.value === "Berdychiv") return <Berdychiv />;
    if (state.value === "Dnipro") return <Dnipro />;
    if (state.value === "Zaporizhzhia") return <Zaporizhzhia />;
    if (state.value === "Ivano-Frankivsk") return <IvanoFrankivsk />;
    if (state.value === "Kremenchuh") return <Kremenchuh />;
    if (state.value === "Kherson") return <Kherson />;
    if (state.value === "Kharkiv") return <Kharkiv />;
    if (state.value === "Kryvyi Rih") return <KryviyRih />;
    if (state.value === "Sumy") return <Sumy />;
    if (state.value === "Lviv") return <Lviv />;
    if (state.value === "Lytsk") return <Lytsk />;
    if (state.value === "Odessa") return <Odessa />;
    if (state.value === "Mykolaiv") return <Mykolaiv />;
    if (state.value === "Rivne") return <Rivne />;
    if (state.value === "Cherkasy") return <Cherkasy />;
    if (state.value === "Chernivtsi") return <Chernivtsi />;
    return null;
  };
  return (
    <Fragment>
      <SelectCustom
        defaultValue={{ label: "Choose your city", value: "Choose your city" }}
        options={options}
        styles={customStyles}
        onChange={value => setState(value)}
      />
      <Addresses />
    </Fragment>
  );
};
const options = [
  { value: "Kyiv", label: "Kyiv" },
  { value: "Berdychiv", label: "Berdychiv" },
  { value: "Bila Tserkva", label: "Bila Tserkva" },
  { value: "Dnipro", label: "Dnipro" },
  { value: "Zaporizhzhia", label: "Zaporizhzhia" },
  { value: "Ivano-Frankivsk", label: "Ivano-Frankivsk" },
  { value: "Kremenchuh", label: "Kremenchuh" },
  { value: "Kryvyi Rih", label: "Kryvyi Rih" },
  { value: "Lytsk", label: "Lytsk" },
  { value: "Lviv", label: "Lviv" },
  { value: "Mykolaiv", label: "Mykolaiv" },
  { value: "Odessa", label: "Odessa" },
  { value: "Rivne", label: "Rivne" },
  { value: "Sumy", label: "Sumy" },
  { value: "Kharkiv", label: "Kharkiv" },
  { value: "Kherson", label: "Kherson" },
  { value: "Cherkasy", label: "Cherkasy" },
  { value: "Chernivtsi", label: "Chernivtsi" }
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid rgba(192,192,192,0.2)",
    backgroundColor: state.isFocused ? "rgba(30,139,195,0.1)" : null,
    color: state.isSelected ? "black" : "gray",
    padding: 20
  }),
  control: (base, state) => ({
    ...base,
    color: state.isFocused ? "black" : "black",
    border: state.isFocused
      ? "1px solid rgba(192,192,192,0.5)"
      : "1px solid rgba(192,192,192,0.5)",
    boxShadow: state.isFocused ? 1 : 1,
    "&:hover": {
      border: state.isFocused
        ? "1px solid rgba(192,192,192,0.9)"
        : "1px solid rgba(192,192,192,0.9)"
    }
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 1 : 0.5;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  }
};

const SelectCustom = styled(Select)`
  width: 60vw;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-bottom: 20px;
`;
