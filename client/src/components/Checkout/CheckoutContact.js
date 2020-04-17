import React from "react";
import { CustomForm, Header, RadioWrapper, Wrapper } from "./checkout.styles";
import { Field, reduxForm } from "redux-form";
import { validate } from "./validate";
import { renderCheckbox, renderField } from "./customFormElements";
import {Button} from "../common/Button/Button";

const UserInformation = props => {
  return (
    <CustomForm onSubmit={props.handleSubmit}>
      <Header align={"left"}>Contact Information</Header>
      <Field
        name={"email"}
        type={"text"}
        placeholder={"Email *"}
        component={renderField}
      />
      <Field
        name={"firstName"}
        type={"text"}
        placeholder={"First Name *"}
        component={renderField}
      />
      <Field
        name={"lastName"}
        type={"text"}
        placeholder={"Last Name *"}
        component={renderField}
      />
      <Wrapper>
        <RadioWrapper>
          <Field
            name={"getMyself"}
            component={renderCheckbox}
            type={"checkbox"}
          />
          <span>I'll get the order myself.</span>
        </RadioWrapper>
      </Wrapper>
      <Header align={"left"}>Shipping Address</Header>
      <Field
        name={"city"}
        type={"text"}
        placeholder={"City"}
        component={renderField}
      />
      <Field
        name={"address"}
        type={"text"}
        placeholder={"Address"}
        component={renderField}
      />
      <Field
        name={"phone"}
        type={"text"}
        placeholder={"Phone *"}
        component={renderField}
      />
      <Button value={"CONTINUE TO SHIPPING"} type="submit" />
    </CustomForm>
  );
};
export const ReduxUserInformation = reduxForm({
  form: "contactInformation",
  validate
})(UserInformation);
