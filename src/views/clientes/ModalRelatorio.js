import React, { useEffect, useState } from "react";

// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
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
import { calculaDataRuptura } from "src/utils/calculaDataRuptura";
import { calculaFck } from "src/utils/calculaFck";
import { useFormik } from "formik";
import axios from "axios";
import { cliente_relatorio, relatorio } from "src/services/api";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'
import clienteActions from '../../store/actions/clienteActions'

const ModalRelatorio = ({ modalOpen, setModalOpen, clienteRelatorio }) => {
  const dispatch = useDispatch()
  const [id_relatorio, setId_Relatorio] = useState(null)
  const token = sessionStorage.getItem("token")

  const close_modal = () => {
    setModalOpen(false)
  }

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  const getRelatorio = (token) => {
    axios
      .get("http://191.252.193.237:3333/v1/cliente/relatorio/", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        // setRelatorio(res.data[0])
        console.log(res.data);
      });
  };

  const cadastraRelatorio = () => {
    console.log(formik.values)
    axios.post(
      `${relatorio}/${clienteRelatorio.id_cliente}`,
      {
        equipamento: formik.values.equipamento_relatorio,
        marca: formik.values.marca_relatorio,
        serie: formik.values.serie_relatorio,
        aferido: formik.values.aferido_relatorio,
        certificado: formik.values.certificado_relatorio,
        executor: formik.values.executor_relatorio,
        conferente: formik.values.conferente_relatorio,
        responsavel: formik.values.responsavel_relatorio,
        cliente_id: clienteRelatorio.id_cliente,
        obs: formik.values.obs_relatorio
      },
      {
        headers,
      }
    ).then((res) => {
      console.log(res.data.token)
      setId_Relatorio(res.data.id)
      // setToken(res.data.token)
      console.log("criado com sucesso");
      // getUser(profile_api);
      getRelatorio(res.data.token)
      dispatch(clienteActions.index_cliente(token))
      close_modal()
      // dispatch(ocorrenciasActions.index_ocorrencia_unidade(usuarioID))
      toast.success("Relat??rio cadastrado com sucesso!", { autoClose: 2000 });
    }).catch((err) => {
      console.log(err);
      toast.error("Erro ao cadastrar Relat??rio. Tente novamente", { autoClose: 2000 });
    });
  };

  const formik = useFormik({
    initialValues: {
      equipamento_relatorio: "",
      marca_relatorio: "",
      serie_relatorio: "",
      aferido_relatorio: "",
      executor_relatorio: "",
      certificado_relatorio: "",
      conferente_relatorio: "",
      responsavel_relatorio: "",
      obs_relatorio: "",
    },
  });

  return (
    <CModal style={{ marginTop: '-20px' }} onClose={close_modal} color="" size="lg" show={modalOpen} closeOnBackdrop={false} borderColor="gray-900" fade={true}>
      <CModalHeader style={{ display: "flex", justifyContent: "space-between" }} closeButton>
        <CModalTitle>Cadastrar Relat??rio - {clienteRelatorio.nome_cliente}</CModalTitle>
      </CModalHeader>
      <CContainer>
        <CCard>

          <CCol xs="12" sm="12" lg="12">
            <CRow>
              <CCol xs="12" sm="12" xl="12" lg="12" md="12">
                <CCardBody>

                  <CCardBody>
                    <CFormGroup row className="my-0">
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Equipamento</CLabel>
                          <CInput placeholder="Equipamento" {...formik.getFieldProps("equipamento_relatorio")} />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Marca</CLabel>
                          <CInput placeholder="Marca" {...formik.getFieldProps("marca_relatorio")} />
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup>
                      <CLabel>S??rie</CLabel>
                      <CInput placeholder="S??rie" {...formik.getFieldProps("serie_relatorio")} />
                    </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="city">Aferido</CLabel>
                          <CInput
                            type="date"
                            id="date-input"
                            name="date-input"
                            placeholder="aferido"
                            {...formik.getFieldProps("aferido_relatorio")}
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Certificado</CLabel>
                          <CInput placeholder="Certificado" {...formik.getFieldProps("certificado_relatorio")} />
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="my-0">
                    <CCol xs="12">
                        <CFormGroup>
                          <CLabel>Executor</CLabel>
                          <CInput placeholder="Executor" {...formik.getFieldProps("executor_relatorio")} />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="12">
                        <CFormGroup>
                          <CLabel>Conferente</CLabel>
                          <CInput placeholder="Conferente" {...formik.getFieldProps("conferente_relatorio")} />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="12">
                        <CFormGroup>
                          <CLabel>Respons??vel</CLabel>
                          <CInput placeholder="Respons??vel" {...formik.getFieldProps("responsavel_relatorio")} />
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel>Obs</CLabel>
                      <CInput placeholder="Obs" {...formik.getFieldProps("obs_relatorio")} />
                    </CFormGroup>
                  </CCardBody>
                </CCardBody>
              </CCol>
            </CRow>
          </CCol>

          <CCardFooter>
            <CButton onClick={() => { cadastraRelatorio() }} variant="" className="bg-gray-900 float-right " disabled={formik.values.serie_relatorio === ""}>
              Cadastrar
            </CButton>
          </CCardFooter>
        </CCard>
      </CContainer>
    </CModal>
  );
};

export default ModalRelatorio;
