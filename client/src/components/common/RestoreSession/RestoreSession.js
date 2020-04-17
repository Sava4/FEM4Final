import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userAction } from "../../../store/user";
import { setAuthorizationToken } from "../../../store/login";
import { Spinner } from "../../Spinner/Spinner";

export const RestoreSession = props => {
  const { children } = props;
  const dispatch = useDispatch();
  const token = useSelector(state => state.login.token);
  const user = useSelector(state => state.user);
  const [loaded, setLoaded] = useState(!Boolean(token));

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/customers/customer", {
          headers: { Authorization: token }
        })
        .then(response => {
          const user = response.data;
          dispatch(userAction(user));
          setAuthorizationToken(token);
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }, []);
  return user ? children : loaded ? children : <Spinner />;
};
