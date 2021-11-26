// import React from 'react'
import axios from "axios";
import authActions from "src/store/actions/authActions";
import userActions from "src/store/actions/userActions";
import { api_login } from "src/services/api";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export function useAuth() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const fn_login = (email, password) => {
    axios.post(api_login, {email,  password}, {  headers: {'Content-Type': 'application/json'}})
    .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        dispatch(authActions.login(res.data.user));
        dispatch(userActions.index_user(res.data.token)) ;
        toast.success('Seja bem-vindo(a)!');
        <Redirect to="/dashboard" />;
      })
      .catch((err) => {
        toast.error('Dados inválidos. Tente novamente')
      })
    };
    
    const fn_logout = () => {
    dispatch(authActions.logout());
    sessionStorage.removeItem('token');
    history.push("/login")
  };

  return {
      fn_login,
      fn_logout
  };
}
