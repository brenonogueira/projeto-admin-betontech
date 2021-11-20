import {
  CCard,
  CCardBody,
  CContainer,
  CDataTable,
  CModal,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import clienteActions from "src/store/actions/clienteActions";

export const ModalClienteRelatorioTeste = () => {
  const dispatch = useDispatch();
  const rd_cliente = useSelector((state) => state.clienteReducer);

  const close_modal = () => {
    dispatch(clienteActions.modal_mode_cliente_relatorio_teste(false));
  };

  console.log(rd_cliente.show);

  return (
    <CModal
      style={{ marginTop: "-20px" }}
      onClose={close_modal}
      color=""
      size="xl"
      show={rd_cliente.modal_mode_cliente_relatorio_teste}
      closeOnBackdrop={false}
      borderColor="gray-900"
      fade={true}
    >
      <CModalHeader
        style={{ display: "flex", justifyContent: "space-between" }}
        closeButton
      >
        <CModalTitle>
          RELATÓRIO - Nº Série: {rd_cliente.show ? rd_cliente.show[0].serie : null}
        </CModalTitle>
      </CModalHeader>
      <CContainer>
        <CCard>
          {rd_cliente.show
            ?
            <CCardBody>
              <strong>Nome:</strong> {rd_cliente.show[0].cliente.nome} <br />
              <strong>CNPJ:</strong> {rd_cliente.show[0].cliente.cnpj}
              <br />
              <strong>OBRA:</strong> {rd_cliente.show[0].cliente.obra} <br />
              <strong>CONTRATO:</strong> {rd_cliente.show[0].cliente.contrato}{" "}
              <br />
              <strong>TELEFONE:</strong> {rd_cliente.show[0].cliente.telefone}{" "}
              <br />
              <br />
              <h5>Testes:</h5>
              <CDataTable
                items={rd_cliente.show[0].teste}
                fields={[
                  { key: "lab", _style: { width: "1%" } },
                  { key: "nota", _style: { width: "1%" } },
                  { key: "fckProj", _style: { width: "15%" } },
                  { key: "moldagem", _style: { width: "10%" } },
                  { key: "ruptura", _style: { width: "20%" } },
                  { key: "idade", _style: { width: "10%" } },
                  { key: "slump", _style: { width: "5%" } },
                  { key: "hora", _style: { width: "5%" } },
                  { key: "local", _style: { width: "20%" } },
                  { key: "peca", _style: { width: "50%" } },
                  { key: "carga", _style: { width: "20%" } },
                  { key: "fck", _style: { width: "20%" } },
                  // { key: "obs", _style: { width: "20%" } },
                  { key: "fck", _style: { width: "20%" } },
                ]}
                hover
                striped
                bordered
                responsive
                size="sm"
                border
                itemsPerPage={10}
                pagination
                scopedSlots={
                  {
                    // status: (item) => <td></td>,
                  }
                }
              />
              <div style={{marginTop: '15px'}}>
                <h5>DADOS DA EQUIPE E EQUIPAMENTOS UTILIZADOS</h5>
                <strong><span>Equipamento: </span></strong>{rd_cliente.show[0]?.equipamento}<br />
                <strong><span>Marca: </span></strong>{rd_cliente.show[0]?.marca}<br />
                <strong><span>Série: </span></strong>{rd_cliente.show[0]?.serie}<br />
                <strong><span>Aferido: </span></strong>{rd_cliente.show[0].aferido}<br />
                <strong><span>Número do Certificado: </span></strong>{rd_cliente.show[0]?.certificado}<br />
                <strong><span>Técnico Conferente: </span></strong>{rd_cliente.show[0]?.conferente}<br />
                <strong><span>Ténico Responsável: </span></strong>{rd_cliente.show[0]?.responsavel}<br />
              </div>
            </CCardBody>
            :
            null
          }

        </CCard>
      </CContainer>
    </CModal>
  );
};
