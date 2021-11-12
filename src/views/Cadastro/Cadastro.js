import React, { useEffect, useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
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
  CRow,
} from "@coreui/react";
import { calculaDataRuptura } from "src/utils/calculaDataRuptura";
import { calculaFck } from "src/utils/calculaFck";
import { useFormik } from "formik";
import axios from "axios";
import { cliente } from "src/services/api";
import { toast } from "react-toastify";

const Cadastro = () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
      // setIdOcorrencia(res.data.id);
      console.log("criado com sucesso");
      // getUser(profile_api);
      // dispatch(ocorrenciasActions.index_ocorrencia_unidade(usuarioID))
      toast.success("Cliente cadastrado com sucesso!", { autoClose: 2000 });
    }).catch((err) => {
      console.log(err);
      toast.error("Erro ao registrar a cliente. Tente novamente", { autoClose: 2000 });
    });
;
  };

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

  //  useEffect(() => {
  //     console.log(calculaDataRuptura('2021-11-11', 3))
  //     console.log(calculaFck(15))
  //  }, [])

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getSteps() {
    return ["Cliente", "Relatório", "Teste"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <CRow>
            <CCol xs="12" sm="12" lg="12">
              <CCardHeader>
                <small> Cliente</small>
              </CCardHeader>
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
          </CRow>
        );
      case 1:
        return (
          <CCol xs="12" sm="12" lg="12">
            <CRow>
              <CCol xs="12" sm="12" xl="12" lg="12" md="12">
                <CCardBody>
                  <CCardHeader>
                    <small>Relatório</small>
                  </CCardHeader>
                  <CCardBody>
                    <CFormGroup row className="my-0">
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Equipamento</CLabel>
                          <CInput placeholder="Equipamento" />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Marca</CLabel>
                          <CInput placeholder="Marca" />
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup>
                      <CLabel>Série</CLabel>
                      <CInput placeholder="Série" />
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
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Certificado</CLabel>
                          <CInput placeholder="Certificado" />
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Conferente</CLabel>
                          <CInput placeholder="Conferente" />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel>Responsável</CLabel>
                          <CInput placeholder="Responsável" />
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel>Obs</CLabel>
                      <CInput placeholder="Obs" />
                    </CFormGroup>
                  </CCardBody>
                </CCardBody>
              </CCol>
            </CRow>
          </CCol>
        );
      case 2:
        return (
          <CContainer fluid>
            <CRow>
              <CCol xs="12" sm="12" xl="12" lg="12" md="12">
                <CCardBody>
                  <CCardHeader>
                    <small>Teste</small>
                  </CCardHeader>
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
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const steps = getSteps();

  return (
    <CContainer>
      <Stepper
        style={{ width: "10px", height: "25px", marginTop: "-25px" }}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((aba) => (
          <Step key={aba}>
            <StepLabel>{aba}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 3 ? (
        <div>
          {/* <Typography component={'span'} variant={'body2'} className={classes.instructions}>All steps completed</Typography> */}
          <Button onClick={handleReset}>Resetar</Button>
        </div>
      ) : (
        <CCard>
          {getStepContent(activeStep)}
          <CCardFooter>
            <CButton onClick={handleBack} disabled={activeStep === 0 }>
              Voltar
            </CButton>
            <CButton onClick={() => {
              handleNext();
              if(activeStep === 0 ) {
                cadastraCliente()
              } else if (activeStep === 1) {
                handleNext();
                // cadastraRelatorio()
              } else if ( activeStep === 2) {
                handleNext();
                // cadastraTeste()
              }
              }} variant="" className="bg-gray-900" disabled={formik.values.telefone_cliente === ""}>
                Cadastrar
            </CButton>
            <CButton
              href="/dashboard"
              variant=""
              className="bg-gray-900 float-right "
            >
              Cancelar
            </CButton>
          </CCardFooter>
        </CCard>
      )}
    </CContainer>
  );
};

export default Cadastro;
