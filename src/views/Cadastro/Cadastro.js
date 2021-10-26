import React, { useState } from "react";

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

const Cadastro = () => {
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
            <CCol xs="12" sm="6" lg="12">
              <CCardHeader>
                <small> Cliente</small>
              </CCardHeader>
              <CCardBody>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel>Nome</CLabel>
                      <CInput placeholder="Nome da Empresa" />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CFormGroup>
                      <CLabel>CNPJ</CLabel>
                      <CInput placeholder="00.000.000/0000-00" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel>Rua</CLabel>
                      <CInput placeholder="Rua" />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel>Número</CLabel>
                      <CInput placeholder="Número" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup>
                  <CLabel>Bairro</CLabel>
                  <CInput placeholder="Bairro" />
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel>Cidade</CLabel>
                      <CInput placeholder="Cidade" />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel>CEP</CLabel>
                      <CInput placeholder="CEP" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Obra</CLabel>
                  <CInput placeholder="Obra" />
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Contrato</CLabel>
                  <CInput placeholder="Contrato" />
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Telefone</CLabel>
                  <CInput placeholder="Telefone" />
                </CFormGroup>
              </CCardBody>
            </CCol>
          </CRow>


        );
      case 1:
        return (
          <CCol xs="12" sm="6" lg="12">
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
                    <CFormGroup>
                      <CLabel>Obs</CLabel>
                      <CInput placeholder="Obs" />
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
      <Stepper style={{ width: '10px', height: '25px', marginTop: '-25px' }} activeStep={activeStep} alternativeLabel>
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
            <CButton onClick={handleBack} disabled={activeStep === 0}>
              Voltar
            </CButton>
            <CButton onClick={handleNext} variant="" className="bg-gray-900">
              {" "}
              {"teste"}
            </CButton>
            <CButton
              onClick={""}
              variant=""
              className="bg-gray-900 float-right "
            >
              Finalizar
            </CButton>
          </CCardFooter>
        </CCard>
      )}
    </CContainer>

  );
};

export default Cadastro;
