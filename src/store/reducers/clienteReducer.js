export const initialState = {
  index: null,
  show: null,
  edit_mode: false,
  modal_mode: false,
  modal_mode_cliente_relatorio_teste: false,
  modal_destroy: {
    modal: false,
    id: null
  }
}


const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INDEX_CLIENTE': return { ...state, index: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
    case 'ADD_SHOW_CLIENTE_RELATORIO_TESTE': return { ...state, show: action.values };
    case 'EDIT_MODE_CLIENTE': return { ...state, edit_mode: action.values };
    case 'MODAL_MODE_CLIENTE': return { ...state, modal_mode: action.values };
    case 'MODAL_MODE_CLIENTE_RELATORIO_TESTE': return { ...state, modal_mode_cliente_relatorio_teste: action.values };
    case 'MODAL_DESTROY_CLIENTE': return { ...state, modal_destroy: action.values };
    default: return state
  }
};

export default clienteReducer;