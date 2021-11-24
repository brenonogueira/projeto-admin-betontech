import React from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";

const ModalExcluir = ({
  modal_status,
  btn_cancelar,
  btn_excluir,
}) => {
  return (
    <CModal show={modal_status} onClose={btn_cancelar} color="danger">
      <CModalHeader closeButton>
        <CModalTitle>
          Tem certeza que deseja excluir este item da lista?
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        Após sua exclusão não háverá mais possibilidade de recuperar a
        informação!
      </CModalBody>
      <CModalFooter>
        <CButton
          color="danger"
          onClick={() => {
            btn_excluir();
          }}
        >
          Excluir
        </CButton>{" "}
        <CButton color="secondary" onClick={btn_cancelar}>
          Cancelar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalExcluir;
