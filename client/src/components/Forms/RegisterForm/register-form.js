import React from 'react';
import styled from 'styled-components';

import {FormButton} from "../FormButton/form-button";
import {Modal} from "../../Modal/modal";
import {Checkbox} from "../FormCheckbox/form-checkbox";

export const RegisterForm = props => {

    const {isModalOpen, onClose} = props;

    return (
        <Modal isModalOpen={isModalOpen} onClose={onClose}>
            <FormWrapper>
                <FormTitle>Create your account</FormTitle>
                <CheckboxContentWrapper>
                    <CheckboxTitle>Salutation</CheckboxTitle>
                    <CheckboxWrapper>
                        <Checkbox>
                            <CheckboxTextLeft>Mr.</CheckboxTextLeft>
                        </Checkbox>
                        <Checkbox>
                            <CheckboxTextLeft>Ms.</CheckboxTextLeft>
                        </Checkbox>
                        <Checkbox>
                            <CheckboxTextLeft>Mrs.</CheckboxTextLeft>
                        </Checkbox>
                    </CheckboxWrapper>
                </CheckboxContentWrapper>
                <FormRegister>
                    <LeftContent>
                        <Input type='text' placeholder='First Name *'/>
                        <Input type='text' placeholder='Last Name *'/>
                        <Input type='email' placeholder='Email *'/>
                    </LeftContent>
                    <RightContent>
                        <InputPasswordWrapper>
                            <InputPassword type='password' placeholder='Password *'/>
                            <InputBottomText>
                                At least 8 characters long, containing uppercase
                                and lowercase letters and numbers.
                            </InputBottomText>
                        </InputPasswordWrapper>
                        <Input type='password' placeholder='Confirm Password *'/>
                        <CheckboxAgree>
                            <Checkbox>
                                <CheckboxTextRight>
                                    I accept Privacy & Cookies Policy *.
                                </CheckboxTextRight>
                            </Checkbox>
                            <Checkbox>
                                <CheckboxTextRightWrapper>
                                    <CheckboxTextRight>
                                        I want to receive about new creations, events and
                                    </CheckboxTextRight>
                                    <CheckboxTextRight>
                                        personalized services.
                                    </CheckboxTextRight>
                                </CheckboxTextRightWrapper>
                            </Checkbox>
                        </CheckboxAgree>
                    </RightContent>
                </FormRegister>
                <FormButtonWrapper>
                    <FormButton value='Register'/>
                </FormButtonWrapper>
            </FormWrapper>
        </Modal>
    );
};

const FormWrapper = styled.form`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002D50;
  background: #ffffff;
`
const FormRegister = styled.div`
  display: flex;
  margin-right: 70px;
  margin-left: 70px;
`

const FormTitle = styled.span`
  margin-top: 60px;
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const LeftContent = styled.div`
  width: 50%;
  margin-right: 50px;
`
const CheckboxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 97px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`
const CheckboxTitle = styled.div`
  font-size: 12px;
  letter-spacing: .5px;
  margin-bottom: 15px;
`

const CheckboxTextLeft = styled.span`
  font-size: 14px;
  margin-right: 60px;
`
const Input = styled.input`
  width: 100%;
  margin-bottom: 40px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #80858D;
  border-bottom-color: ${props => props.invalid ? 'red' : '#80858D'};
  letter-spacing: .5px;
  font-size: 12px;
  
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff !important; 
    -webkit-text-fill-color: #999 !important; 
    color: #999 !important; 
}
  
  ::placeholder {
    color: #80858D;
  }
  
  :focus {
    outline: none;
  }
`

const InputPassword = styled(Input)`
  margin-bottom: 7px;
`

const InputPasswordWrapper = styled.div`
  margin-bottom: 23px;
`

const InputBottomText = styled.div`
  font-size: 9px;
  color: #80858D;
`

const RightContent = styled.div`
  width: 50%;
  margin-left: 50px;
  margin-bottom: 15px;
`
const CheckboxAgree = styled.div`
  margin-top: 12px;
  
`

const CheckboxTextRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CheckboxTextRight = styled.div`
  font-size: 12px;
`

const FormButtonWrapper = styled.div`
  width: 40%;
  margin-bottom: 40px;
`
