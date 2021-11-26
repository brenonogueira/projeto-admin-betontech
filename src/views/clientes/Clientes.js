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
import CIcon from "@coreui/icons-react";
import ModalRelatorio from "./ModalRelatorio";
import clienteActions from "src/store/actions/clienteActions";
import { useSelector, useDispatch } from "react-redux";
import ModalCliente from "./ModalCliente";
import { ModalClienteRelatorioTeste } from "./ModalClienteRelatorioTeste";
import ModalTeste from "./ModalTeste";
import ModalExcluir from "./ModalExcluir";
import PrintComponent from "./PrintComponent";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [details, setDetails] = useState([]);
  // const [relatorio, setRelatorio] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [clienteRelatorio, setClienteRelatorio] = useState({
    id_cliente: null,
    nome_cliente: null,
  });
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const rd_cliente = useSelector((state) => state.clienteReducer);

  useEffect(() => {
    dispatch(clienteActions.index_cliente(token));
  }, []);

  // console.log(rd_cliente);

  const fields = [
    {
      key: "nome",
      label: "NOME",
      _style: { width: "5%", textAlign: "center" },
    },
    {
      key: "cnpj",
      label: "CNPJ",
      _style: { width: "10%", textAlign: "center" },
    },
    {
      key: "obra",
      label: "OBRA",
      _style: { width: "10%", textAlign: "center" },
    },
    {
      key: "telefone",
      label: "TELEFONE",
      _style: { width: "10%", textAlign: "center" },
    },
    {
      key: "contrato",
      label: "CONTRATO",
      _style: { width: "2%", textAlign: "center" },
    },

    {
      key: "relatorio",
      label: "RELATÓRIO",
      _style: { width: "4%", textAlign: "center" },
    },
    { key: "acoes", label: "", _style: { width: "4%" } },
  ];

  const fields_relatorio = [
    {
      key: "serie",
      label: "SÉRIE",
      _style: { width: "4%", textAlign: "center" },
    },
    {
      key: "token",
      label: "TOKEN",
      _style: { width: "4%", textAlign: "center" },
    },
    {
      key: "acoes",
      label: "AÇÕES",
      _style: { width: "5%", textAlign: "center" },
    },
  ];

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

  const ordenarClientes = rd_cliente?.index?.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const openModalCreate = () => {
    dispatch(clienteActions.modal_mode_cliente(true));
  };

  const openModalClienteRelatorioTeste = () => {
    dispatch(clienteActions.modal_mode_cliente_relatorio_teste(true));
  };

  const openModalCreateTeste = () => {
    dispatch(clienteActions.modal_mode_teste(true));
  };

  // console.log(ordenarClientes);

  function btn_excluir() {
    dispatch(
      clienteActions.destroy_relatorio(rd_cliente.modal_destroy.id, token)
    );
  }

  function btn_cancel_excluir() {
    dispatch(clienteActions.modal_destroy_cliente({ modal: false, id: null }));
  }

  const array_clientes = rd_cliente?.index?.filter(cliente => cliente.nome !== null)

  console.log(array_clientes)

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
            onClick={openModalCreate}
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
            items={array_clientes}
            fields={fields}
            tableFilter={{ label: "Filtrar", placeholder: "o que procura?" }}
            itemsPerPageSelect={(true, { label: "Itens por Página" })}
            itemsPerPage={10}
            hover
            border
            striped
            responsive
            pagination
            loading={false}
            scopedSlots={{
              acoes: (item, index) => {
                return (
                  <td className="py-2" style={{ textAlign: "center" }}>
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        toggleDetails(index);
                      }}
                    >
                      <CIcon name="cil-chevron-circle-down-alt" />
                    </CButton>
                  </td>
                );
              },

              relatorio: (item, index) => {
                return (
                  <>
                    <td className="py-2" style={{ textAlign: "center" }}>
                      <CButton
                        style={{ marginRight: 5 }}
                        color="primary"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // console.log(item);
                          setModalOpen(true);
                          setClienteRelatorio({
                            id_cliente: item.id,
                            nome_cliente: item.nome,
                          });
                        }}
                      >
                        <CIcon name="cil-clipboard" alt="Delete" />
                      </CButton>

                      {/* <CButton
                        style={{ marginRight: 5 }}
                        color="primary"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // console.log(item);
                          setModalOpen(true);
                          setClienteRelatorio({
                            id_cliente: item.id,
                            nome_cliente: item.nome,
                          });
                        }}
                      >
                        <CIcon name="cil-pencil" alt="Delete" />
                      </CButton> */}

                      {/* <CButton
                        color="danger"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // console.log(item);
                          setModalOpen(true);
                          setClienteRelatorio({
                            id_cliente: item.id,
                            nome_cliente: item.nome,
                          });
                        }}
                      >
                        <CIcon name="cil-trash" alt="Delete" />
                      </CButton> */}
                    </td>
                  </>
                );
              },
              //mostrar os detalhes da ocorrencia
              details: (item, index) => {
                return (
                  <CCollapse show={details.includes(index)}>
                    <CCard>
                      <CCardBody>
                        <CCard>
                          <CCardBody>
                            <strong>Nome:</strong> {item.nome} <br />
                            <strong>CNPJ:</strong> {item.cnpj}
                            <br />
                            <strong>ENDEREÇO:</strong> {item.endereco.rua} -
                            Bairro: {item.endereco.bairro} - Cidade:{" "}
                            {item.endereco.cidade} - CEP: {item.endereco.cep}{" "}
                            <br />
                            <strong>OBRA:</strong> {item.obra} <br />
                            <strong>CONTRATO:</strong> {item.contrato} <br />
                            <strong>TELEFONE:</strong> {item.telefone} <br />
                            <br />
                            <CDataTable
                              items={item.relatorio}
                              fields={fields_relatorio}
                              hover
                              striped
                              bordered
                              // sorter={true}
                              // columnFilter
                              responsive
                              size="sm"
                              itemsPerPage={10}
                              pagination
                              scopedSlots={{
                                acoes: (item) => {
                                  return (
                                    <td
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      {/* {console.log(item)} */}
                                      <CButton
                                        onClick={() => {
                                          openModalClienteRelatorioTeste();
                                          dispatch(
                                            clienteActions.show_cliente_relatorio_teste(
                                              token,
                                              item.id
                                            )
                                          );
                                        }}
                                        size="sm"
                                        color="primary"
                                      >
                                        <CIcon
                                          name="cil-file"
                                          alt="Relatorio Completo"
                                        />
                                      </CButton>

                                      {/* <PrintComponent
                                        onClick={() =>
                                          dispatch(
                                            clienteActions.show_cliente_relatorio_teste(
                                              token,
                                              item.id
                                            )
                                          )
                                        }
                                      /> */}

                                      <CButton
                                        style={{ marginLeft: "4px" }}
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                          // console.log(item);
                                          dispatch(
                                            clienteActions.modal_destroy_cliente(
                                              { modal: true, id: item.id }
                                            )
                                          );
                                        }}
                                      >
                                        <CIcon name="cil-trash" alt="Delete" />
                                      </CButton>

                                      <ModalExcluir
                                        modal_status={
                                          rd_cliente.modal_destroy.modal
                                        }
                                        btn_cancelar={btn_cancel_excluir}
                                        btn_excluir={btn_excluir}
                                      />
                                    </td>
                                  );
                                },
                              }}
                            />
                          </CCardBody>
                        </CCard>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                );
              },
            }}
          />
        </CCardBody>
      </CCard>
      <ModalClienteRelatorioTeste />

      <ModalCliente />
      <ModalRelatorio
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        clienteRelatorio={clienteRelatorio}
      />
    </>
  );
}
