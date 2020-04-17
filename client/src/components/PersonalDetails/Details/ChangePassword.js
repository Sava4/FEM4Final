import React from "react";
import { useSelector } from "react-redux";
import {
  Description,
  Details,
  Edit,
  Holder,
  InputWrapper
} from "./PersonalInformation";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";

export const ChangePassword = props => {
  const user = useSelector(state => state.user);

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
          <Input type="password" value={user.password} />
          <Edit />
        </Holder>
        <Holder>
          <Input type="password" placeholder={"New Password *"} />
          <Edit />
        </Holder>
        <Holder>
          <Input type="password" placeholder={"Confirm Password *"} />
          <Edit />
        </Holder>
        <Button value={"Save Changes"} />
      </InputWrapper>
    </Details>
  );
};
