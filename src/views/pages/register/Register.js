import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInvalidFeedback,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useFormik } from 'formik';
import axios from 'axios';
import { user } from 'src/services/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Register = () => {

  let history = useHistory()

  const formik = useFormik({
    initialValues: {
      username_input: "",
      email_input: "",
      password_input: "",
      password_input2: "",
    },
  });

  const cadastraFuncionario = () => {
    axios.post(user, {
      username: formik.values.username_input,
      email: formik.values.email_input,
      password: formik.values.password_input
    }).then((res) => {
      toast.success('Usuário cadastrado com sucesso! Faça o login')
      history.push('/login')
    }).catch((err) => {
      toast.warning('Erro ao realizar cadastro. Tente novamente')
    })
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Cadastro </h1>
                  <p className="text-muted">Realizar cadastro do Funcionário</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Nome" autoComplete="Nome" {...formik.getFieldProps("username_input")} noValidate={true}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" {...formik.getFieldProps("email_input")} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Senha" autoComplete="new-password" {...formik.getFieldProps("password_input")}  />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    {/* <CInput type="password" placeholder="Repetir senha" autoComplete="new-password"  className="form-control-warning" {...formik.getFieldProps("password_input2")} color='#f4f4f4'  /> */}
                    <CInput type="password" invalid={formik.values.password_input !== formik.values.password_input2 ? true : null} valid={formik.values.password_input !== "" && formik.values.password_input === formik.values.password_input2 ? true : false} className="form-control-warning" placeholder="Repetir senha" autoComplete="new-password" id="inputWarning2i" required {...formik.getFieldProps("password_input2")} />
                    <CInvalidFeedback className="help-block">
                    As senhas não combinam!
                  </CInvalidFeedback>
                  </CInputGroup>
                  <CButton onClick={cadastraFuncionario} color="success" block>Cadastrar funcionário</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
