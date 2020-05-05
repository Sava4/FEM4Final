import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { update } from "../../../store/user";

export const PersonalInformation = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [user, setUser] = useState(useSelector(state => state.user));

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
      setData({
        ...data,
        [key]: event.target.value
      });
      setUser({
        ...user,
        [key]: event.target.value
      });
    };
  }

  function onDatepickerChange(value) {
    data["date"] = value;
    setData(data);
  }

  function updateCustomer() {
    dispatch(update(data));
  }
};
