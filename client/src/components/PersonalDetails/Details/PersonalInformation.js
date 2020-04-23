import React, {useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import styled from "styled-components";
import {mediaMobile, mediaTablet} from "../../../styledComponents/MediaBreakpointsMixin";

import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input";
import {Datepicker} from "../Datepicker/Datepicker";
import edit from "./edit.png";

export const PersonalInformation = () => {
  const user = useSelector(state => state.user);
  const [data, setData] = useState({});

  return (
    <Details>
      <Description>
        In your Personal Account you can access and modify your personal details
        in order to facilitate your future purchases.
        <br/>
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
          <Edit/>
        </Holder>
        <Holder>
          <Input
            type="text"
            label="Last Name *"
            value={user.lastName}
            onChange={handleDataChange("lastName")}
          />
          <Edit/>
        </Holder>
        <Holder>
          <Input
            type="email"
            label="Email *"
            value={user.email}
            onChange={handleDataChange("email")}
          />
          <Edit/>
        </Holder>
        <Holder>
          <Input
            type="tel"
            label="Phone"
            value={user.telephone}
            onChange={handleDataChange("telephone")}
          />
          <Edit/>
        </Holder>
        <Datepicker value={user.date} onChange={onDatepickerChange}/>
        <Button value={"Save Changes"} onClick={updateCustomer}/>
      </InputWrapper>
    </Details>
  );

  function handleDataChange(key) {
    return function (event) {
      data[key] = event.target.value;
      setData(data);
    };
  }

  function onDatepickerChange(value) {
    data["date"] = value;
    setData(data);
  }

  function updateCustomer() {
    return (
      axios
        .put("http://localhost:5000/customers", data)
        .then(data => {
          console.log(data);
        })
        .catch((error => {
            console.log(error)
          })
        )
    )
  }
};

export const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 120px;
  margin-right: 130px;
  
  ${mediaTablet(`
    margin-left: 50px;
    margin-right: 50px;
  `)}
   
  ${mediaMobile(`
    // display: none;
  `)}
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  width: 50%;
  margin-bottom: 60px;
  
  ${mediaTablet(`
    width: 100%;
  `)}
`;

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
