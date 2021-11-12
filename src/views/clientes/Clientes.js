import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CDataTable,
  CCardHeader,
  CButton,
  CCollapse,
} from "@coreui/react";
import axios from "axios";
import { cliente } from "src/services/api";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [details, setDetails] = useState([])

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };

  useEffect(() => {
    axios.get(cliente, { headers }).then((res) => {
        setClientes(res.data)
        console.log(clientes)
    });
  }, [cliente]);

  const fields = [
    {
      key: "nome",
      label: "NOME",
      _style: { width: "2%" },
    },
    {
      key: "cnpj",
      label: "CNPJ",
      _style: { width: "10%" },
    },
    {
      key: "obra",
      label: "OBRA",
      _style: { width: "15%" },
    },
    {
      key: "telefone",
      label: "TELEFONE",
      _style: { width: "20%" },
    },
    {
      key: "contrato",
      label: "CONTRATO",
      _style: { width: "5%" },
    },

    { key: 'acoes', label: "Ações", _style: { width: '10%' } },
   
  ];

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }


  return (
    <>
      <CCard>
        <CCardHeader
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4>Clientes</h4>{" "}
          </div>
          <CButton
            href="/cadastro"
            className="bg-gray-900"
            variant=""
            size="md"
          >
            Adicionar Novo Cliente
          </CButton>
        </CCardHeader>
        <CCardBody>
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
              <CButton onClick={openModalCreate} className="bg-gray-900" variant="outline" size="lg">Adicionar Nova Ocorrência</CButton>
            </div> */}
          <CDataTable
            items={clientes}
            fields={fields}
            tableFilter={{ label: "Filtrar", placeholder: "o que procura?" }}
            itemsPerPageSelect={(true, { label: "Itens por Página" })}
            itemsPerPage={10}
            hover
            border
            striped
            pagination
            loading={false}
            scopedSlots={
              {
                acoes: (item, index) => {
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => { toggleDetails(index);  }}
                        >
                          {details.includes(index) ? 'OCULTAR' : 'MOSTRAR'}
                        </CButton>
                      </td>
                    )
                  },
  
                //mostrar os detalhes da ocorrencia
                details: (item, index) => {
                    console.log(item)
                  return (
                    <CCollapse show={details.includes(index)}>
                      <CCardBody>
                        <h4>{item.nome}</h4>
                        <p> {` Rua: ${item.endereco?.rua}, Bairro: ${item.endereco?.bairro}, Número: ${item.endereco?.numero} `}</p>
                        <p> {` Cidade: ${item.endereco?.cidade}, Estado: ${item.endereco?.estado}, CEP: ${item.endereco?.cep} `}</p>
                        <p className="text-muted">
                   
                        </p>
                       
                      </CCardBody>
                    </CCollapse>
                  );
                },
              }
            }
          />
        </CCardBody>
      </CCard>
    </>
  );
}
