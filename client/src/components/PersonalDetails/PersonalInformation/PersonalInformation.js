import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Details,
  Description,
  InputWrapper,
  Holder,
  Edit
} from "./personalInformation.styles";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import { Datepicker } from "../Datepicker/Datepicker";

export const PersonalInformation = () => {
  const user = useSelector(state => state.user);
  const [data, setData] = useState({});

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
          <Input
            type="text"
            label="First Name *"
            value={user.firstName}
            onChange={handleDataChange("firstName")}
          />
          <Edit />
        </Holder>
        <Holder>
          <Input
            type="text"
            label="Last Name *"
            value={user.lastName}
            onChange={handleDataChange("lastName")}
          />
          <Edit />
        </Holder>
        <Holder>
          <Input
            type="email"
            label="Email *"
            value={user.email}
            onChange={handleDataChange("email")}
          />
          <Edit />
        </Holder>
        <Holder>
          <Input
            type="tel"
            label="Phone"
            value={user.telephone}
            onChange={handleDataChange("telephone")}
          />
          <Edit />
        </Holder>
        <Datepicker value={user.date} onChange={onDatepickerChange} />
        <Button value={"Save Changes"} onClick={updateCustomer} />
      </InputWrapper>
    </Details>
  );

  function handleDataChange(key) {
    return function(event) {
      data[key] = event.target.value;
      setData(data);
    };
  }

  function onDatepickerChange(value) {
    data["date"] = value;
    setData(data);
  }

  function updateCustomer() {
    return axios
      .put("http://localhost:5000/customers", data)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
