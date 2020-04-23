import React, {useEffect, useState} from "react";
import {getMonthOptions, getDaysOptions, getYearOptions} from "./utils";
import styled from "styled-components";
import arrow from "./dropdownArrow.png";


export const Datepicker = props => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDay());
  const [year, setYear] = useState(new Date().getFullYear());


  useEffect(() => {
    if (month && day && year) {
      props.onChange(new Date(year, month, day));
    }
  }, [month, day, year]);

  return (
    <Holder>
      <Title>Birthday</Title>
      <Birthday>
        <Select onChange={onMonthChange} value={props.value}>
          <Options selected={month} disabled>
            Month
          </Options>
          {getMonthOptions(month)}
        </Select>
        <Select onChange={onDayChange} value={() => setDay(day)}>
          <Options selected disabled>
            Day
          </Options>
          {getDaysOptions()}
        </Select>
        <Select onChange={onYearChange} value={() => setYear(year)}>
          <Options selected disabled>
            Year
          </Options>
          {getYearOptions()}
        </Select>
      </Birthday>
    </Holder>
  );

  function onMonthChange(event) {
    setMonth(event.target.value);
  }

  function onDayChange(event) {
    setDay(event.target.value);
  }

  function onYearChange(event) {
    setYear(event.target.value);
  }
};

export const Holder = styled.div``;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
  letter-spacing: .4px;
  color: #80858d;
`;

export const Birthday = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
`;

export const Select = styled.select`
  width: 30%;
  font-size: 14px;
  letter-spacing: 0.4px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  background-size: 14px;
  border: none;
  border-bottom: 1px solid #80858d;
  border-radius: 0;
  padding-bottom: 5px;
  cursor: pointer;
`;

export const Options = styled.option``;
