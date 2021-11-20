import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  // CCardHeader,
  CCol,
  CContainer,
  CFormGroup,
  CInput,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  // CRow,
} from "@coreui/react";
import { useFormik } from "formik";
import axios from "axios";
import { cliente } from "src/services/api";
import { toast } from 'react-toastify';
// import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import clienteActions from 'src/store/actions/clienteActions';

export default function ModalCliente() {
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
    dispatch(clienteActions.modal_mode_cliente(false));
    limpa_formulario();
    // dispatch(clienteActions.edit_mode_cliente(false));
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
    <CModal style={{ marginTop: '-20px' }} onClose={close_modal} color="" size="lg" show={rd_cliente.modal_mode} closeOnBackdrop={false} borderColor="gray-900" fade={true}>
      <CModalHeader style={{ display: "flex", justifyContent: "space-between" }} closeButton>
        <CModalTitle>Cadastrar Cliente</CModalTitle>
      </CModalHeader>
      <CContainer>
        <CCard>

        <CCol xs="12" sm="12" lg="12">
            <CCardBody>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Nome</CLabel>
                    <CInput placeholder="Nome da Empresa"   {...formik.getFieldProps("nome_cliente")} />
                  </CFormGroup>
                </CCol>
                <CCol xs="6" md="6">
                  <CFormGroup>
                    <CLabel>CNPJ</CLabel>
                    <CInput placeholder="00.000.000/0000-00"  {...formik.getFieldProps("cnpj_cliente")} />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel>Rua</CLabel>
                    <CInput placeholder="Rua" {...formik.getFieldProps("rua_cliente")} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel>Número</CLabel>
                    <CInput placeholder="Número" {...formik.getFieldProps("numero_end_cliente")} />
                  </CFormGroup>
                </CCol>
              </CFormGroup>

              <CFormGroup>
                <CLabel>Bairro</CLabel>
                <CInput placeholder="Bairro" {...formik.getFieldProps("bairro_cliente")} />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel>Cidade</CLabel>
                    <CInput placeholder="Cidade" {...formik.getFieldProps("cidade_cliente")} />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel>CEP</CLabel>
                    <CInput placeholder="CEP" {...formik.getFieldProps("cep_cliente")} />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel>Obra</CLabel>
                <CInput placeholder="Obra" {...formik.getFieldProps("obra_cliente")} />
              </CFormGroup>
              <CFormGroup>
                <CLabel>Contrato</CLabel>
                <CInput placeholder="Contrato" {...formik.getFieldProps("contrato_cliente")} />
              </CFormGroup>
              <CFormGroup>
                <CLabel>Telefone</CLabel>
                <CInput placeholder="Telefone" {...formik.getFieldProps("telefone_cliente")} />
              </CFormGroup>
            </CCardBody>
          </CCol>

          <CCardFooter>
            <CButton onClick={() => { cadastraCliente() }} variant="" className="bg-gray-900 float-right " disabled={formik.values.serie_relatorio === ""}>
              Cadastrar
            </CButton>
          </CCardFooter>
        </CCard>
      </CContainer>
    </CModal>
  )
}
