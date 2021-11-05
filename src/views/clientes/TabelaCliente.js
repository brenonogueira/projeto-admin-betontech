import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CDataTable,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
import { DocsLink } from "src/reusable";

export default function TabelaCliente() {
  // const fields = ['nome','cnpj', 'rua', 'bairro', 'cidade', 'numero', 'cep', 'obra', 'contrato', 'telefone']

  const fields = [
    { key: "nome", _style: { width: "20%" } },
    { key: "cnpj", _style: { width: "5%" } },

    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const usersData = [
    {
      nome: "A.C CONSTRUÇÕES E TERRAPLANAGEM EIRELI",
      cnpj: "07.314.584/0001-19",
      rua: "RUA DA LUA",
      bairro: "FLORESTA",
      cidade: "Buritis",
      numero: 521,
      cep: "76806-420",
      obra: "PREFEITURA MINICIPAL DE BURITIS - RO ",
      contrato: "081/PMB/2019",
      telefone: "4002 8922",
    },
  ];

  const camposTeste = [
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

    // {
    //   key: "show_details",
    //   label: "",
    //   _style: { width: "1%" },
    //   sorter: false,
    //   filter: false,
    // },
  ];

  const teste = [
    {
      lab: 1,
      nota: "1",
      fckProj: 20,
      moldagem: "15/7/20",
      ruptura: "18/7/20",
      idade: 3,
      slump: 6,
      hora: "10:45",
      local: "Rua Santo Expedito",
      peca: "Meio Fio",
      carga: 10.98,
      fck: 14.0,
    //   obs: "Concreto Produzido na Obra",
    },
    {
        lab: 2,
        nota: "1",
        fckProj: 20,
        moldagem: "15/7/20",
        ruptura: "18/7/20",
        idade: 3,
        slump: 6,
        hora: "10:45",
        local: "Rua Santo Expedito",
        peca: "Meio Fio",
        carga: 10.98,
        fck: 14.0,
        // obs: "Concreto Produzido na Obra",
      },
      {
        lab: 3,
        nota: "1",
        fckProj: 20,
        moldagem: "15/7/20",
        ruptura: "18/7/20",
        idade: 3,
        slump: 6,
        hora: "10:45",
        local: "Rua Santo Expedito",
        peca: "Meio Fio",
        carga: 10.98,
        fck: 14.0,
        // obs: "Concreto Produzido na Obra",
      },
      {
        lab: 4,
        nota: "1",
        fckProj: 20,
        moldagem: "15/7/20",
        ruptura: "18/7/20",
        idade: 3,
        slump: 6,
        hora: "10:45",
        local: "Rua Santo Expedito",
        peca: "Meio Fio",
        carga: 10.98,
        fck: 14.0,
        // obs: "Concreto Produzido na Obra",
      },
  ];

  return (
    <div>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Cliente</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                responsive
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge>{item.status}</CBadge>
                    </td>
                  ),
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {
                            toggleDetails(index);
                          }}
                        >
                          {details.includes(index) ? "Ocultar" : "Mostrar"}
                        </CButton>
                      </td>
                    );
                  },
                  details: (item, index) => {
                    return (
                      <CCollapse show={details.includes(index)}>
                        <CCard>
                          <CCardBody>
                            <CCard>
                              <CCardHeader>
                                Card title
                                <DocsLink name="CCard" />
                              </CCardHeader>
                              <CCardBody>
                                <strong>Nome:</strong> {usersData[0].nome}{" "}
                                <br />
                                <strong>CNPJ:</strong> {usersData[0].cnpj}
                                <br />
                                <strong>ENDEREÇO:</strong> {usersData[0].rua} -
                                Bairro: {usersData[0].bairro} - Cidade:{" "}
                                {usersData[0].cidade} - CEP: {usersData[0].cep}{" "}
                                <br />
                                <strong>OBRA:</strong> {usersData[0].obra}{" "}
                                <br />
                                <strong>CONTRATO:</strong>{" "}
                                {usersData[0].contrato} <br />
                                <strong>TELEFONE:</strong>{" "}
                                {usersData[0].telefone}
                              </CCardBody>
                            </CCard>
                            <CDataTable
                              items={teste}
                              fields={camposTeste}
                              hover
                              striped
                              bordered
                              responsive
                              size="sm"
                              itemsPerPage={10}
                              pagination
                              scopedSlots={{
                                // status: (item) => <td></td>,
                              }}
                            />
                          </CCardBody>
                        </CCard>
                      </CCollapse>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}
