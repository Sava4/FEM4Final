import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {useSelector} from "react-redux";
import {
  Description,
  Details,
  Edit,
  Holder,
  InputWrapper
} from "../PersonalInformation/personalInformation.styles";
import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input";

export const ChangePassword = props => {
  const user = useSelector(state => state.user);
  const [password, setPassword] = useState({});

  return (
    <Details>
      <Description>
        If you want to change your password, please fill in the required fields.
        <br/>
        Your password should be at least 8 characters long containing uppercase
        and lowercase letters
        <br/>
        and at least one number.
      </Description>
      <InputWrapper>
        <Holder>
          <Input
            type="password"
            label="Current Password *"
            value={user.password}
            onChange={handlePasswordChange("password")}
          />
          <Edit/>
        </Holder>
        <Holder>
          <Input
            type="password"
            label="New Password *"
            onChange={handlePasswordChange("newPassword")}
          />
          <Edit/>
        </Holder>
        <Holder>
          <Input
            type="password"
            label="Confirm new password *"
          />
          <Edit/>
        </Holder>
        <ButtonWrapper>
          <Button value={"Save Changes"} onClick={changePassword}/>
        </ButtonWrapper>
      </InputWrapper>
    </Details>
  );

  function handlePasswordChange(key) {
    return function (event) {
      password[key] = event.target.value;
      setPassword(password);
    };
  }

  function changePassword() {
    return (
      axios.put("http://localhost:5000/customers/password", password)
        .then(updatedPassword => console.log(updatedPassword))
        .catch(error => console.log(error))
    )
  }
};

const ButtonWrapper = styled.div`
  margin-top: 25px;
`
