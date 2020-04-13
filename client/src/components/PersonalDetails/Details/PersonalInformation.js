import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";

import {FormButton} from "../../Forms/FormButton/FormButton";
import {Input} from "../../Forms/RegisterForm/registerForm.styles";

export const PersonalInformation = () => {
  const user = useSelector(state => state.user);

  const thisYear = new Date().getFullYear();
  const yearsArray = [];
  for (let i = 1970; i <= thisYear; i++) {
    yearsArray.push(thisYear - (thisYear - i));
  }
  const year = yearsArray.map(year => {
    return (
      <Options key={year} value={year}>{year}</Options>
    )
  });

  const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"].map(month => {
    return (
      <Options key={month} value={month}>{month}</Options>
    )
  });

  const daysArray = [];
  for (let i = 1; i <= 31; i++) {
    daysArray.push(i);
  }
  const days = daysArray.map(day => {
    return (
      <Options key={day} value={day}>{day}</Options>
    )
  });

  return (
    <Details>
      <Description>In your Personal Account you can access and modify your personal details in order to facilitate your
        future purchases.
        <br/>If you want to update your details, please edit the correspondent field and then save changes.
      </Description>
      <InputWrapper>
        <Input type="text" placeholder={"First Name *"} value={user.firstName}/>
        <Input type="text" placeholder={"Last Name *"} value={user.lastName}/>
        <Input type="email" placeholder={"Email *"} value={user.email}/>
        <Input type="tel" placeholder={"Phone number"} value={user.phone}/>
        <Birthday>
          <Select>
            <Options selected disabled>Month</Options>
            {month}
          </Select>
          <Select>
            <Options selected disabled>Day</Options>
            {days}
          </Select>
          <Select>
            <Options selected disabled>Year</Options>
            {year}
          </Select>
        </Birthday>
        <FormButton value={"Save Changes"}/>
      </InputWrapper>
    </Details>
  )
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
  //width: 100px;
  //padding-bottom: 5px;
  //font-size: 14px;
  //letter-spacing: .4px;
  //border: none;
  //background: none;
  //outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  margin-right: 2rem;
  padding: 1rem;
  padding-right: 2rem;
`;

export const Options = styled.option`
  
`

