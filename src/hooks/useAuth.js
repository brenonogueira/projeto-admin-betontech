// import React from 'react'
import axios from "axios";
import authActions from "src/store/actions/authActions";
import { api_login } from "src/services/api";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

export default function useAuth() {
  const dispatch = useDispatch();

  const fn_login = (email, senha) => {
    axios.post(api_login, {email,  senha}, {  headers: {'Content-Type': 'application/json'}})
    .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        dispatch(authActions.login(res.data.user))
    })
  };

  const fn_logout = () => {
    dispatch(authActions.logout());
    sessionStorage.removeItem('token');
    // history.push("/login")
  };


  return {
      fn_login,
      fn_logout
  };
}
