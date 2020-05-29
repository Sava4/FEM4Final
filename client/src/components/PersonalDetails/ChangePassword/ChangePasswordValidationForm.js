import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import {
  Form,
  Holder
} from "../PersonalInformation/personalInformation.styles";
import { Eye } from "../../Forms/InputPassword/InputPassword";
import { renderField } from "../../common/ValidationRules/Field";
import { validate } from "./passwordValidation";
import { Button } from "../../common/Button/Button";
import { UpdateInformationForm } from "../../Forms/UpdateInformationForm/UpdateInformationForm";
import { updatePass } from "../../../store/user";

const ValidationForm = props => {
  const { invalid } = props;
  const dispatch = useDispatch();
  const [isOpen, toggleModal] = useState(false);
  const [state, setState] = useState({
    password: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [currentPasswordShown, setCurrentPasswordShown] = useState(true);
  const [newPasswordShown, setNewPasswordShown] = useState(true);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState({});

  return (
    <Form onSubmit={changePassword}>
      <Holder>
        <Field
          name="currentPassword"
          type={currentPasswordShown ? "password" : "text"}
          label="Current Password *"
          component={renderField}
          onChange={handlePasswordChange("password")}
        />
        <Eye onClick={() => setCurrentPasswordShown(!currentPasswordShown)} />
        {error.password && <Error>{error.password}</Error>}
      </Holder>
      <Holder>
        <Field
          name="newPassword"
          type={newPasswordShown ? "password" : "text"}
          label="New Password *"
          component={renderField}
          onChange={handlePasswordChange("newPassword")}
        />
        <Eye onClick={() => setNewPasswordShown(!newPasswordShown)} />
        {error.newPassword && <Error>{error.newPassword}</Error>}
      </Holder>
      <Holder>
        <Field
          name="confirmPassword"
          type={confirmPasswordShown ? "password" : "text"}
          label="Confirm Password *"
          component={renderField}
          onChange={handlePasswordChange("confirmPassword")}
        />
        <Eye onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} />
      </Holder>
      <ButtonWrapper>
        <Button
          value="Save Changes"
          type="submit"
          disabled={submitting || invalid}
        />
        {isOpen && <UpdateInformationForm onClose={() => toggleModal(false)} />}
      </ButtonWrapper>
    </Form>
  );

  function handlePasswordChange(key) {
    return function(event) {
      setState({
        ...state,
        [key]: event.target.value
      });
    };
  }

  function changePassword(event) {
    event.preventDefault();
    setSubmitting(true);
    dispatch(updatePass(state))
      .then(() => toggleModal(!isOpen))
      .catch(error => setError(error.response.data))
      .finally(() => setSubmitting(false));
  }
};

export const ChangePasswordValidationForm = reduxForm({
  form: "PasswordValidation",
  validate
})(ValidationForm);

const ButtonWrapper = styled.div`
  padding-top: 5px;
`;

const Error = styled.div`
  position: absolute;
  bottom: -12px;
  font-size: 10px;
  color: #db3d3d;
`;
