import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Details,
  Description,
  InputWrapper,
  Holder,
  Edit
} from "./personalInformation.styles";
import { Error } from "../../common/ValidationRules/Field";
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import { Datepicker } from "../Datepicker/Datepicker";
import { update } from "../../../store/user";
import { UpdateInformationForm } from "../../Forms/UpdateInformationForm/UpdateInformationForm";
import {
  emailValidate,
  firstNameValidate,
  lastNameValidate,
  telephoneValidate
} from "../../common/ValidationRules/validationRules";

export const PersonalInformation = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [user, setUser] = useState(useSelector(state => state.user));
  const [isOpen, toggleModal] = useState(false);
  const [error, setError] = useState({});

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
            invalid={error.firstName}
            onChange={onFirstNameChange}
          />
          <Edit />
          {error.firstName && <Error>{error.firstName}</Error>}
        </Holder>
        <Holder>
          <Input
            type="text"
            label="Last Name *"
            value={user.lastName}
            invalid={error.lastName}
            onChange={onLastNameChange}
          />
          <Edit />
          {error.lastName && <Error>{error.lastName}</Error>}
        </Holder>
        <Holder>
          <Input
            type="email"
            label="Email *"
            value={user.email}
            invalid={error.email}
            onChange={onEmailChange}
          />
          <Edit />
          {error.email && <Error>{error.email}</Error>}
        </Holder>
        <Holder>
          <Input
            type="tel"
            label="Phone"
            value={user.telephone}
            invalid={error.telephone}
            onChange={onTelephoneChange}
          />
          <Edit />
          {error.telephone && <Error>{error.telephone}</Error>}
        </Holder>
        <Datepicker value={user.date} onChange={onDatepickerChange} />
        <Button
          value={"Save Changes"}
          onClick={updateCustomer}
          disabled={
            error.firstName || error.lastName || error.email || error.telephone
          }
        />
        {isOpen && <UpdateInformationForm onClose={() => toggleModal(false)} />}
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

  function onFirstNameChange(event) {
    handleDataChange("firstName")(event);
    const firstNameError = firstNameValidate(event.target.value);
    setError({
      ...error,
      firstName: firstNameError
    });
  }

  function onLastNameChange(event) {
    handleDataChange("lastName")(event);
    const lastNameError = lastNameValidate(event.target.value);
    setError({
      ...error,
      lastName: lastNameError
    });
  }

  function onEmailChange(event) {
    handleDataChange("email")(event);
    const emailError = emailValidate(event.target.value);
    setError({
      ...error,
      email: emailError
    });
  }

  function onTelephoneChange(event) {
    handleDataChange("telephone")(event);
    const telephoneError = telephoneValidate(event.target.value);
    setError({
      ...error,
      telephone: telephoneError
    });
  }

  function onDatepickerChange(value) {
    data["date"] = value;
    setData(data);
  }

  function updateCustomer() {
    dispatch(update(data))
      .then(() => toggleModal(!isOpen))
      .catch(error => setError(error.response.data));
  }
};
