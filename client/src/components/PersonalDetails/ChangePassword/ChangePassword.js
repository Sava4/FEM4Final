import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  Description,
  Details,
  Edit,
  Holder,
  InputWrapper
} from "../PersonalInformation/personalInformation.styles";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import { updatePass } from "../../../store/user";
import { UpdateInformationForm } from "../../Forms/UpdateInformationForm/UpdateInformationForm";

export const ChangePassword = props => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState({});
  const [isOpen, toggleModal] = useState(false);

  return (
    <Details>
      <Description>
        If you want to change your password, please fill in the required fields.
        <br />
        Your password should be at least 8 characters long containing uppercase
        and lowercase letters
        <br />
        and at least one number.
      </Description>
      <InputWrapper>
        <Holder>
          <Input
            type="password"
            label="Current Password *"
            onChange={handlePasswordChange("password")}
          />
          <Edit />
        </Holder>
        <Holder>
          <Input
            type="password"
            label="New Password *"
            onChange={handlePasswordChange("newPassword")}
          />
          <Edit />
        </Holder>
        <Holder>
          <Input type="password" label="Confirm new password *" />
          <Edit />
        </Holder>
        <ButtonWrapper>
          <Button value={"Save Changes"} onClick={changePassword} />
          {isOpen && (
            <UpdateInformationForm onClose={() => toggleModal(false)} />
          )}
        </ButtonWrapper>
      </InputWrapper>
    </Details>
  );

  function handlePasswordChange(key) {
    return function(event) {
      setPassword({
        ...password,
        [key]: event.target.value
      });
    };
  }

  function changePassword() {
    dispatch(updatePass(password));
    toggleModal(!isOpen);
  }
};

const ButtonWrapper = styled.div`
  margin-top: 50px;
`;
