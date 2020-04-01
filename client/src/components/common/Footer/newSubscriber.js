import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

export function AddSubscriber(props) {
let emailValue=props.emailValue;
let setSignup = props.setSignup;
let [email, setEmail] = useState(props.email)
// let email
//   (props.email!==null) && (email = props.email)
  const newSubscriber = {
    email: `${email}`,
    letterSubject: "Test letter (final project)",
    letterHtml:
      "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>"
  };
  // console.log(email);
 
  if (email) {
    //ПРОВЕРКА ВВОДА
  
    axios
      .post("http://localhost:5000/customers/login", {
        loginOrEmail: "customer@gmail.com",
        password: "1111111"
      })
      .then(response => {
        let token = response.data.token;
        // setSignup("ОТПРАВЛЯЕМ ПИСЬМО");
        axios
          .post("http://localhost:5000/subscribers", newSubscriber, {
            headers: { Authorization: `${token}` }
          })
          .then(newSubscriber => {
            console.log("success");
            console.log(newSubscriber);
            setEmail(false)
            alert(email);
            setSignup("ПОДПИСКА ДОБАВЛЕНА");

          })
          .catch(err => {
            console.log("error add");
            console.log(err.response);
            setTimeout(setSignup("УЖЕ ЕСТЬ ТАКОЙ"),2000);
            setTimeout(setSignup('Sign Up'),8000)
            setEmail(false)
          });
      })
      .catch(err => {
        console.log("error auth");
        console.log(err);
      });
   
  }


  return (
    <>
  
    </>
  );
}

export function UpdateSubscriber() {
  const updateSubscriber = {
    email: "111@i.ua",
    enabled: true,
    letterSubject: "Welcome back",
    letterHtml: "<p>We are glad to see you!</p>"
  };
  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;
      axios
        .put(
          "http://localhost:5000/subscribers/email/mywear1@gmail.com",
          updateSubscriber,
          {
            headers: { Authorization: `${token}` }
          }
        )
        .then(updateSubscriber => {
          console.log("success");
          console.log(updateSubscriber);
        })
        .catch(err => {
          console.log("error add");
          console.log(err.response);
        });
    })
    .catch(err => {
      console.log("error auth");
      console.log(err);
    });
}
// const Modal = styled.div`
//   width: 100px;
//   height: 100px;
//   display: none;
//   border: 1px solid #002d50;
//   background: #ffffff;

//   ${mediaMobile(`
//   flex-direction: column;
//   align-items: center;
//   `)}
// `;

// const FormLogIn = styled.div`
//   width: 55%;
//   display: flex;
//   flex-direction: column;
//   margin-left: 70px;
//   margin-right: 70px;
//   margin-bottom: 70px;

//   ${mediaMobile(`
//   width: 80%;
//   margin: 0 0 50px 0;
//   align-items: center;
//   `)}
// `;
