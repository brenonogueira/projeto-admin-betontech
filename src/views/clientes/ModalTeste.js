import React from 'react'
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
import { useFormik } from "formik";
import axios from "axios";
import { cliente } from "src/services/api";
import { toast } from 'react-toastify';
// import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import clienteActions from 'src/store/actions/clienteActions';

export default function ModalTeste() {
  const token = sessionStorage.getItem("token")
  const dispatch = useDispatch()
  const rd_cliente = useSelector(state => state.clienteReducer)

  const formik = useFormik({
    initialValues: {
      nome_cliente: "",
      cnpj_cliente: "",
      rua_cliente: "",
      bairro_cliente: "",
      numero_end_cliente: "",
      cidade_cliente: "",
      cep_cliente: "",
      obra_cliente: "",
      contrato_cliente: "",
      telefone_cliente: "",
    },
  });

  const limpa_formulario = () => {
    formik.setFieldValue("nome_cliente", "");
    formik.setFieldValue("cnpj_cliente", null);
    formik.setFieldValue("rua_cliente", null);
    formik.setFieldValue("bairro_cliente", null);
    formik.setFieldValue("numero_end_cliente", null);
    formik.setFieldValue("cidade_cliente", null);
    formik.setFieldValue("obra_cliente", null);
    formik.setFieldValue("contrato_cliente", null);
    formik.setFieldValue("telefone_cliente", null);
  };

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  const close_modal = () => {
    dispatch(clienteActions.modal_mode_teste(false));
    limpa_formulario();
  };

  const cadastraCliente = () => {
    console.log(formik.values)
    axios.post(
      cliente,
      {
        nome: formik.values.nome_cliente,
        cnpj: formik.values.cnpj_cliente,
        rua: formik.values.rua_cliente,
        bairro: formik.values.bairro_cliente,
        cidade: formik.values.cidade_cliente,
        numero: formik.values.numero_end_cliente,
        cep: formik.values.cep_cliente,
        obra: formik.values.obra_cliente,
        contrato: formik.values.contrato_cliente,
        telefone: formik.values.telefone_cliente,
      },
      {
        headers,
      }
    ).then((res) => {
      console.log(res.data)
      console.log("criado com sucesso");
      dispatch(clienteActions.index_cliente(token))
      toast.success("Cliente cadastrado com sucesso!", { autoClose: 2000 });
      close_modal()
    }).catch((err) => {
      console.log(err);
      toast.error("Erro ao registrar a cliente. Tente novamente", { autoClose: 2000 });
    });
    ;
  };

  return (
    <CModal style={{ marginTop: '-20px' }} onClose={close_modal} color="" size="lg" show={rd_cliente.modal_mode_teste} closeOnBackdrop={false} borderColor="gray-900" fade={true}>
      <CModalHeader style={{ display: "flex", justifyContent: "space-between" }} closeButton>
        <CModalTitle>Novo Teste</CModalTitle>
      </CModalHeader>
      <CContainer fluid>
              <CRow>
                <CCol xs="12" sm="12" xl="12" lg="12" md="12">
                  <CCardBody>
                    <CCardBody>
                      <CFormGroup row className="my-0">
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel htmlFor="city">Lab</CLabel>
                            <CInput placeholder="Lab" />
                          </CFormGroup>
                        </CCol>
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Nota</CLabel>
                            <CInput placeholder="Nota" />
                          </CFormGroup>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row className="my-0">
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>fckProj</CLabel>
                            <CInput placeholder="fckProj" />
                          </CFormGroup>
                        </CCol>
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Responsável</CLabel>
                            <CInput placeholder="Responsável" />
                          </CFormGroup>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row className="my-0">
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Moldagem</CLabel>
                            <CInput
                              type="date"
                              id="date-input"
                              name="date-input"
                              placeholder="moldagem"
                            />
                          </CFormGroup>
                        </CCol>
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Ruptura</CLabel>
                            <CInput
                              type="date"
                              id="date-input"
                              name="date-input"
                              placeholder="ruptura"
                            />
                          </CFormGroup>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row className="my-0">
                        <CCol xs="4">
                          <CFormGroup>
                            <CLabel>Idade</CLabel>
                            <CInput placeholder="Idade" />
                          </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                          <CFormGroup>
                            <CLabel>Slump</CLabel>
                            <CInput placeholder="Slump" />
                          </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                          <CFormGroup>
                            <CLabel>Hora</CLabel>
                            <CInput placeholder="Hora" />
                          </CFormGroup>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row className="my-0">
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Local</CLabel>
                            <CInput placeholder="Local" />
                          </CFormGroup>
                        </CCol>
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Peça</CLabel>
                            <CInput placeholder="Peça" />
                          </CFormGroup>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row className="my-0">
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Carga</CLabel>
                            <CInput placeholder="Local" />
                          </CFormGroup>
                        </CCol>
                        <CCol xs="6">
                          <CFormGroup>
                            <CLabel>FCK</CLabel>
                            <CInput placeholder="FCK" />
                          </CFormGroup>
                        </CCol>
                      </CFormGroup>
                    </CCardBody>
                  </CCardBody>
                </CCol>
              </CRow>
            </CContainer>
    </CModal>
  )
}
