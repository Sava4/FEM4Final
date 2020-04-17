import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import arrow from "./dropdownArrow.png";
import edit from "./edit.png";

export const PersonalInformation = () => {
  const user = useSelector(state => state.user);

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
  ].map(month => {
    return (
      <Options key={month} value={month}>
        {month}
      </Options>
    );
  });

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

  return (
    <Details>
      <Description>
        In your Personal Account you can access and modify your personal details
        in order to facilitate your future purchases.
        <br />
        If you want to update your details, please edit the correspondent field
        and then save changes.
      </Description>
      <InputWrapper>
        <Holder>
          <Input type="text" label="First Name *" value={user.firstName} />
          <Edit />
        </Holder>
        <Holder>
          <Input type="text" label="Last Name *" value={user.lastName} />
          <Edit />
        </Holder>
        <Holder>
          <Input type="email" label="Email" value={user.email} />
          <Edit />
        </Holder>
        <Holder>
          <Input type="tel" label="Phone" value={user.phone} />
          <Edit />
        </Holder>
        <Birthday>
          <Select>
            <Options selected disabled>
              Month
            </Options>
            {month}
          </Select>
          <Select>
            <Options selected disabled>
              Day
            </Options>
            {days}
          </Select>
          <Select>
            <Options selected disabled>
              Year
            </Options>
            {year}
          </Select>
        </Birthday>
        <Button value={"Save Changes"} />
      </InputWrapper>
    </Details>
  );
};

export const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 120px;
  margin-right: 130px;
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  width: 50%;
  margin-bottom: 60px;
`;

export const Birthday = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
`;

export const Select = styled.select`
  width: 100px;
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
`;

export const Options = styled.option``;

export const Holder = styled.div`
  display: flex;
  position: relative;
`;

export const Edit = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${edit});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 13px;
`;
