import React, { useEffect, useState } from "react";
import { getMonthOptions, getDaysOptions, getYearOptions } from "./utils";
import styled from "styled-components";
import arrow from "./dropdownArrow.png";
import {mediaMobile} from "../../../styledComponents/MediaBreakpointsMixin";

export const Datepicker = props => {
  const { value } = props;
  const [month, setMonth] = useState(value ? new Date(value).getMonth() : null);
  const [day, setDay] = useState(value ? new Date(value).getDate() : null);
  const [year, setYear] = useState(
    value ? new Date(value).getFullYear() : null
  );

  useEffect(() => {
    if (month && day && year) {
      props.onChange(new Date(year, month, day));
    }
  }, [month, day, year]);

  return (
    <Holder>
      <Title>Birthday</Title>
      <Birthday>
        <Select onChange={onMonthChange}>
          <Options selected={!month} disabled>
            Month
          </Options>
          {getMonthOptions(month)}
        </Select>
        <Select onChange={onDayChange}>
          <Options selected={!day} disabled>
            Day
          </Options>
          {getDaysOptions(day)}
        </Select>
        <Select onChange={onYearChange}>
          <Options selected={!year} disabled>
            Year
          </Options>
          {getYearOptions(year)}
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
  letter-spacing: 0.4px;
  color: #80858d;
`;

export const Birthday = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
  
  ${mediaMobile(`
    margin-bottom: 30px;
  `)}
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
