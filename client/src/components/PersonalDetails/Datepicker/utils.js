import React from "react";
import { Options } from "./Datepicker";

export function getYearOptions(selected) {
  const thisYear = new Date().getFullYear();
  const yearsArray = [];
  for (let i = 1970; i <= thisYear; i++) {
    let year;

    if (i === selected) {
      year = (
        <Options selected key={i} value={i}>
          {i}
        </Options>
      );
    } else {
      year = (
        <Options key={i} value={i}>
          {i}
        </Options>
      );
    }
    yearsArray.push(year);
  }
  return yearsArray;
}

export function getMonthOptions(selected) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ].map((month, index) => {
    if (index === selected) {
      return (
        <Options selected key={month} value={index}>
          {month}
        </Options>
      );
    } else {
      return (
        <Options key={month} value={index}>
          {month}
        </Options>
      );
    }
  });
  return month;
}

export function getDaysOptions(selected) {
  const daysArray = [];
  for (let i = 1; i <= 31; i++) {
    let day;

    if (i === selected) {
      day = (
        <Options selected key={i} value={i}>
          {i}
        </Options>
      );
    } else {
      day = (
        <Options key={i} value={i}>
          {i}
        </Options>
      );
    }
    daysArray.push(day);
  }
  return daysArray;
}
