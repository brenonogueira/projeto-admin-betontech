import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CFormGroup,
  CInput,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import clienteActions from "src/store/actions/clienteActions";
import { useSelector, useDispatch } from "react-redux";

export default function ModalImpressao() {

  const dispatch = useDispatch()
  const rd_cliente = useSelector((state) => state.clienteReducer);

  const close_modal = () => {
    dispatch(clienteActions.modal_mode_impressao(false));
  }
  return (
    <CModal
      style={{ marginTop: "-20px" }}
      onClose={close_modal}
      color=""
      size="lg"
      show={rd_cliente.modal_mode_impressao}
      closeOnBackdrop={false}
      borderColor="gray-900"
      fade={true}
    >
      <CModalHeader
        style={{ display: "flex", justifyContent: "space-between" }}
        closeButton
      >
        <CModalTitle>Imprimir Relatório</CModalTitle>
      </CModalHeader>
      
    </CModal>
  );
}
