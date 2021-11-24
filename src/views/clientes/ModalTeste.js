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
import { useFormik } from "formik";
import axios from "axios";
import { teste } from "src/services/api";
import { toast } from "react-toastify";
// import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import clienteActions from "src/store/actions/clienteActions";
import { calculaFck } from "src/utils/calculaFck";
import { calculaDataRuptura } from "src/utils/calculaDataRuptura";

export default function ModalTeste({ idRelatorio }) {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const rd_cliente = useSelector((state) => state.clienteReducer);
  // const [ruptura, setRuptura] = useState();
  // const [fck, setFck] = useState();

  const formik = useFormik({
    initialValues: {
      reg_input: "",
      nota_input: "",
      fckProj_input: "",
      moldagem_input: "",
      slump_input: "",
      idade_input: "",
      hora_input: "",
      local_input: "",
      peca_input: "",
      carga_input: "",
    },
  });

  const limpa_formulario = () => {
    formik.setFieldValue("reg", "");
    formik.setFieldValue("nota", null);
    formik.setFieldValue("fckProj", null);
    formik.setFieldValue("moldagem", null);
    formik.setFieldValue("idade", null);
    formik.setFieldValue("local", null);
    formik.setFieldValue("peca", null);
    formik.setFieldValue("carga", null);
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

  const cadastraRelatorio = () => {
    console.log(formik.values);
    axios
      .post(`${teste}/${idRelatorio}`,
        {
          reg: formik.values.reg_input,
          nota: formik.values.nota_input,
          fckProj: formik.values.fckProj_input,
          moldagem: formik.values.moldagem_input,
          idade: formik.values.idade_input,
          slump: formik.values.slump_input,
          hora: formik.values.hora_input,
          local: formik.values.local_input,
          peca: formik.values.peca_input,
          carga: formik.values.carga_input,
          ruptura: calculaDataRuptura(formik.values.moldagem_input, formik.values.idade_input ),
          fck: calculaFck(formik.values.carga_input),
        },
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log("criado com sucesso");
        dispatch(clienteActions.index_cliente(token));
        dispatch(clienteActions.show_cliente_relatorio_teste( token, idRelatorio));
        toast.success("Teste cadastrado com sucesso!", { autoClose: 2000 });
        close_modal();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao registrar a Teste. Tente novamente", {
          autoClose: 2000,
        });
      });
  };

  // const calculaDtRup = () => {
  //   console.log(
  //     calculaDataRuptura(
  //       formik.values.moldagem_input,
  //       formik.values.idade_input
  //     )
  //   );
  // };

  const calculaFckForm = () => {
    console.log(
      calculaFck(
        formik.values.carga_input
      )
    );
  };

  return (
    <CModal
      style={{ marginTop: "-20px" }}
      onClose={close_modal}
      color=""
      size="lg"
      show={rd_cliente.modal_mode_teste}
      closeOnBackdrop={false}
      borderColor="gray-900"
      fade={true}
    >
      <CModalHeader
        style={{ display: "flex", justifyContent: "space-between" }}
        closeButton
      >
        <CModalTitle>Novo Teste</CModalTitle>
      </CModalHeader>
      <CContainer fluid>
        <CRow>
          <CCol xs="12" sm="12" xl="12" lg="12" md="12">
            <CCardBody>
              <CCardBody>
                <CFormGroup row className="my-0">
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="city">Reg Lab</CLabel>
                      <CInput
                        placeholder="Reg Lab"
                        {...formik.getFieldProps("reg_input")}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel>Nota Fiscal</CLabel>
                      <CInput
                        placeholder="Nota Fiscal"
                        {...formik.getFieldProps("nota_input")}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel>fckProj</CLabel>
                      <CInput
                        placeholder="fckProj"
                        {...formik.getFieldProps("fckProj_input")}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel>Idade</CLabel>
                      <CInput
                        placeholder="Idade"
                        {...formik.getFieldProps("idade_input")}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel>Moldagem</CLabel>
                      <CInput
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="moldagem"
                        {...formik.getFieldProps("moldagem_input")}
                      />
                    </CFormGroup>
                  </CCol>
                  {/* <CCol xs="6">
                          <CFormGroup>
                            <CLabel>Ruptura</CLabel>
                            <CInput
                              type="date"
                              id="date-input"
                              name="date-input"
                              placeholder="ruptura"
                            />
                          </CFormGroup>
                        </CCol> */}
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel>Slump</CLabel>
                      <CInput
                        placeholder="Slump"
                        {...formik.getFieldProps("slump_input")}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel>Hora</CLabel>
                      <CInput
                        placeholder="Hora"
                        {...formik.getFieldProps("hora_input")}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel>Local da Concretagem</CLabel>
                      <CInput
                        placeholder="Local da Concretagem"
                        {...formik.getFieldProps("local_input")}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel>Peça Concretada</CLabel>
                      <CInput
                        placeholder="Peça Concretada"
                        {...formik.getFieldProps("peca_input")}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel>Carga</CLabel>
                      <CInput
                        placeholder="Carga"
                        {...formik.getFieldProps("carga_input")}
                      />
                    </CFormGroup>
                  </CCol>
                  {/* <CCol xs="6">
                          <CFormGroup>
                            <CLabel>FCK</CLabel>
                            <CInput placeholder="FCK" />
                          </CFormGroup>
                        </CCol> */}
                </CFormGroup>
              </CCardBody>
              <CCardFooter style={{textAlign: 'end'}}>
                <CButton className="bg-gray-900"  onClick={cadastraRelatorio}> CADASTRAR</CButton>
              </CCardFooter>
            </CCardBody>
          </CCol>
        </CRow>
      </CContainer>
    </CModal>
  );
}
