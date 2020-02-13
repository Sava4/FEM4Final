import React, { Fragment } from "react";
import { useAlert, positions } from "react-alert";
import InfoIcon from "./icons/InfoIcon";
import SuccessIcon from "./icons/SuccessIcon";
import ErrorIcon from "./icons/ErrorIcon";
import CloseIcon from "./icons/CloseIcon";
import styled from "styled-components/macro";

const AlertBox = styled.div`
  background-color: ${props =>
    (props.options.type === "info" && "rgb(255, 250, 230)") ||
    (props.options.type === "error" && "rgb(255, 235, 230)") ||
    (props.options.type === "success" && "rgb(227, 252, 239)")};
  color: ${props =>
    (props.options.type === "info" && "rgb(255, 139, 0)") ||
    (props.options.type === "error" && "rgb(191, 38, 0)") ||
    (props.options.type === "success" && "rgb(0, 102, 68)")};
  padding: 10px;
  text-transform: uppercase;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.03);
  font-family: "Montserrat", sans-serif;
  width: 300px;
  box-sizing: border-box;
`;

const Btn = styled.div`
  margin-left: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const alertOptions = {
  timeout: 0,
  position: positions.TOP_CENTER,
  offset: "12px"
};

const NotificationTemplate = ({ message, options, style, close }) => {
  return (
    <AlertBox options={options} style={{ ...style }}>
      {options.type === "info" && <InfoIcon />}
      {options.type === "success" && <SuccessIcon />}
      {options.type === "error" && <ErrorIcon />}
      <span style={{ flex: 2 }}>{message}</span>
      <Btn onClick={close}>
        <CloseIcon />
      </Btn>
    </AlertBox>
  );
};

//just for test
const Notification = () => {
  const alert = useAlert();

  return (
    <Fragment>
      <button
        onClick={() => {
          alert.show("Oh look, an alert!");
        }}
      >
        Show Alert
      </button>
      <button
        onClick={() => {
          alert.error("You just broke something! And more text included");
        }}
      >
        Oops, an error
      </button>
      <button
        onClick={() => {
          alert.success("It's ok now!");
        }}
      >
        Success!
      </button>
    </Fragment>
  );
};

export default Notification;
//test end

export { NotificationTemplate, alertOptions };

//import React, { Component, Fragment } from "react";
// import { withAlert } from "react-alert";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// export class Alerts extends Component {
//   static propTypes = {
//     error: PropTypes.object.isRequired,
//     message: PropTypes.object.isRequired
//   };

//   componentDidUpdate(prevProps) {
//     const { error, alert, message } = this.props;
//     if (error !== prevProps.error) {
//       if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
//       if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
//       if (error.msg.message)
//         alert.error(`Message: ${error.msg.message.join()}`);
//       if (error.msg.non_field_errors)
//         alert.error(error.msg.non_field_errors.join());
//       if (error.msg.username) alert.error(error.msg.username.join());
//     }

//     if (message !== prevProps.message) {
//       if (message.deleteLead) alert.success(message.deleteLead);
//       if (message.addLead) alert.success(message.addLead);
//       if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
//     }
//   }

//   render() {
//     return <Fragment />;
//   }
// }

// const mapStateToProps = state => ({
//   error: state.errors,
//   message: state.messages
// });

// export default connect(mapStateToProps)(withAlert(Alerts));
