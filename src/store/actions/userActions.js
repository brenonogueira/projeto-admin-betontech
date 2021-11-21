/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { user } from "../../services/api";

const index_user = (tokenDeAcesso) => {
  return (dispatch) => {
    axios
      .get(user, { headers: { Authorization: `Bearer ${tokenDeAcesso}` } })
      .then((res) => {
        dispatch(add_data_index_user(res.data));
      });
  };
};

const add_data_index_user = (values) => {
  return { type: "INDEX_USER", values };
};

export default {
  index_user,
  add_data_index_user,
}