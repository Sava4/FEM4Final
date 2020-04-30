import React from "react";
import { Options } from "./Datepicker";

export function getYearOptions() {
  const thisYear = new Date().getFullYear();
  const yearsArray = [];
  for (let i = 1970; i <= thisYear; i++) {
    yearsArray.push(thisYear - (thisYear - i));
  }
  const year = yearsArray.map(year => {
    return (
      <Options key={year} value={year}>
        {year}
      </Options>
    );
  });
  return year;
}

export function getMonthOptions() {
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
    return (
      <Options key={month} value={index}>
        {month}
      </Options>
    );
  });
  return month;
}

export function getDaysOptions() {
  const daysArray = [];
  for (let i = 1; i <= 31; i++) {
    daysArray.push(i);
  }
  const days = daysArray.map(day => {
    return (
      <Options key={day} value={day}>
        {day}
      </Options>
    );
  });
  return days;
}
