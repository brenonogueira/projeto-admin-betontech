import React, { useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CButton, CCol, CRow, CForm, CInputGroup, CInputGroupPrepend, CInputGroupText, CInput } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TrocarSenha = () => {

    return (
        <CRow>
          <CCol lg={12}>
            <CCard>
              <CCardHeader>
                Nome: Usuário
              </CCardHeader>
              <CCardBody>
                <CForm>
                  <p className="text-muted">Altere sua senha</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Nova senha" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Confirmar senha" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton color="success" block>Alterar</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )
    }

    export default TrocarSenha
    