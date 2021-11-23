import React, { useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CButton, CCol, CRow, CForm, CInputGroup, CInputGroupPrepend, CInputGroupText, CInput } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { update_password } from 'src/services/api'
import axios from 'axios'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { Redirect, useHistory } from 'react-router-dom'

const TrocarSenha = () => {
  // const token = sessionStorage.getItem("token")

  const history = useHistory()

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  const formik = useFormik({
    initialValues: {
      password_input: "",
    },
  });

  const trocaSenha = () => {
    console.log(formik.values)
      axios.put(update_password,
        {
         password: formik.values.password_input
        },
        {
          headers,
        }
      ).then((res) => {
        toast.success("Senha alterada com sucesso!", { autoClose: 2000 });
        history.push('/clientes')
      }).catch((err) => {
        console.log(err);
        toast.error("Erro ao alterar senha. Tente novamente", { autoClose: 2000 });
      });
    };
  

    return (
        <CRow>
          <CCol lg={12}>
            <CCard>
              <CCardBody>
                <CForm>
                  <p className="text-muted">Altere sua senha</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Nova senha" autoComplete="new-password" {...formik.getFieldProps("password_input")} />
                  </CInputGroup>
                  <CButton onClick={trocaSenha} color="success" block>Alterar</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )
    }

    export default TrocarSenha
    