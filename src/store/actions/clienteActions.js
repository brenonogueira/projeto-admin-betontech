
import axios from 'axios';
import { cliente } from '../../services/api'

const index_cliente = (tokenDeAcesso) => {
  return dispatch => {
    axios.get(cliente, { headers: { Authorization: `Bearer ${tokenDeAcesso}` } })
      .then(res => {
        dispatch(add_data_index_cliente(res.data))
      })
  };
};

const add_data_index_cliente = (values) => { return { type: 'INDEX_CLIENTE', values } }
const add_show_cliente = values => { return { type: 'ADD_SHOW_CLIENTE', values }; };
const edit_mode_cliente = values => { return { type: 'EDIT_MODE_CLIENTE', values }; };
const modal_destroy_cliente = values => { return { type: 'MODAL_DESTROY_CLIENTE', values }; };
const modal_mode_cliente = values => { return { type: 'MODAL_MODE_CLIENTE', values }; };

export default {
  index_cliente,
  add_data_index_cliente,
  add_show_cliente,
  // show_cliente,
  edit_mode_cliente,
  modal_destroy_cliente,
  modal_mode_cliente,
  // destroy_cliente,
};
