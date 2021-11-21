/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  // CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useFormik } from "formik";
// import { useSelector } from "react-redux";
import {useAuth}  from "src/hooks/useAuth";

const Login = () => {
  const token = sessionStorage.getItem("token")
  // const history = useHistory();
  const autentica = useAuth();
  // const rd_auth = useSelector((state) => state.authReducer)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const fn_logar = (e) => {
    e.preventDefault()
    autentica.fn_login(formik.values.email, formik.values.password)
  }
  
  useEffect(() => {
  }, [token])

  useEffect(() => {
    // console.log("chegou aqui ");
    if (token !== null) {
      <Redirect to={'/'}/>
    } else {
      <Redirect to={'/login'}/>
    }
  }, [token]);

  console.log(formik.values)


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <form onSubmit={fn_logar}>
                    <h1>Login</h1>
                    <p className="text-muted">Entrar</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        placeholder="E-mail"
                        autoComplete="email"
                        {...formik.getFieldProps("email")}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        {...formik.getFieldProps("password")}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">
                          Entrar
                        </CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu sua senha?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </form>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>BETONTECH</h2>
                    <p>
                      É nosso trabalho, todos os dias, tornar cada aspecto importante da experiência 
                      do cliente um pouco melhor.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Cadastrar funiconário
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
