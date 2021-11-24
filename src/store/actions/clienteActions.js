/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { cliente, relatorio } from "../../services/api";

const index_cliente = (tokenDeAcesso) => {
  return (dispatch) => {
    axios
      .get(cliente, { headers: { Authorization: `Bearer ${tokenDeAcesso}` } })
      .then((res) => {
        dispatch(add_data_index_cliente(res.data));
      });
  };
};

const show_cliente_relatorio_teste = (tokenDeAcesso, idRelatorio) => {
  return (dispatch) => {
    axios
      .get(`${relatorio}/${idRelatorio}`, {
        headers: { Authorization: `Bearer ${tokenDeAcesso}` },
      })
      .then((res) => {
        dispatch(add_show_cliente_relatorio_teste(res.data));
      });
  };
};

const destroy_relatorio = (id, token) => {
  return dispatch => {
    axios.delete(`${relatorio}/${id} sdsadadasds`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        dispatch(modal_destroy_cliente(false))
        dispatch(index_cliente(token))
      })
  };
};


const add_data_index_cliente = (values) => {
  return { type: "INDEX_CLIENTE", values };
};
const add_show_cliente_relatorio_teste = (values) => {
  return { type: "ADD_SHOW_CLIENTE_RELATORIO_TESTE", values };
};
const edit_mode_cliente = (values) => {
  return { type: "EDIT_MODE_CLIENTE", values };
};
const modal_destroy_cliente = (values) => {
  return { type: "MODAL_DESTROY_CLIENTE", values };
};
const modal_mode_cliente = (values) => {
  return { type: "MODAL_MODE_CLIENTE", values };
};
const modal_mode_cliente_relatorio_teste = (values) => {
  return { type: "MODAL_MODE_CLIENTE_RELATORIO_TESTE", values };
};

const modal_mode_teste = (values) => {
  return { type: "MODAL_MODE_TESTE", values };
};

const modal_mode_impressao = (values) => {
  return { type: "MODAL_MODE_IMPRESSAO", values };
};

export default {
  index_cliente,
  add_data_index_cliente,

  show_cliente_relatorio_teste,
  add_show_cliente_relatorio_teste,

  edit_mode_cliente,
  modal_destroy_cliente,
  destroy_relatorio,

  modal_mode_cliente,
  modal_mode_cliente_relatorio_teste,
  modal_mode_teste,
  modal_mode_impressao
};
