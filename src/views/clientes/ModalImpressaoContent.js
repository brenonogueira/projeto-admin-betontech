import { CButton, CCard, CCardBody, CCol, CContainer, CDataTable, CRow } from "@coreui/react";
import moment from "moment";
import React from "react";
import { useSelector, useDispatch } from "react-redux";


export const ModalImpressaoContent = React.forwardRef(
  ({ modalOpen, setOpen, relatorio, setRelatorio, dataAferido }, ref) => {

    const rd_cliente = useSelector((state) => state.clienteReducer);

    console.log(rd_cliente?.show);

    return (
      <div ref={ref}>
       <CContainer>
          {rd_cliente.show ? (
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <h5>Testes:</h5>
                {/* <CButton
                  onClick={openModalCreateTeste}
                  className="bg-gray-900"
                  variant=""
                  size="md"
                >
                  Adicionar Teste
                </CButton> */}
              </div>
              <CDataTable
                items={rd_cliente.show[0].teste.map((el) => {
                  var dataMoldagem = el.moldagem;
                  var dataMoldagemFormatada =
                    moment(dataMoldagem).format("DD/MM/YYYY");
                  return {
                    ...el,
                    data_moldagem: dataMoldagemFormatada,
                  };
                })}
                fields={[
                  { key: "reg", _style: { width: "1%" } },
                  { key: "nota", _style: { width: "1%" } },
                  { key: "fckProj", _style: { width: "15%" } },
                  { key: "data_moldagem", _style: { width: "10%" } },
                  { key: "ruptura", _style: { width: "20%" } },
                  { key: "idade", _style: { width: "10%" } },
                  { key: "slump", _style: { width: "5%" } },
                  { key: "hora", _style: { width: "5%" } },
                  { key: "local", _style: { width: "20%" } },
                  { key: "peca", _style: { width: "50%" } },
                  { key: "carga", _style: { width: "20%" } },
                  { key: "fck", _style: { width: "20%" } },
                  // { key: "obs", _style: { width: "20%" } },
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
              <div style={{ marginTop: "15px" }}>
                <h5>DADOS DA EQUIPE E EQUIPAMENTOS UTILIZADOS</h5>
                <strong>
                  <span>Equipamento: </span>
                </strong>
                {rd_cliente.show[0]?.equipamento}
                <br />
                <strong>
                  <span>Marca: </span>
                </strong>
                {rd_cliente.show[0]?.marca}
                <br />
                <strong>
                  <span>S??rie: </span>
                </strong>
                {rd_cliente.show[0]?.serie}
                <br />
                <strong>
                  <span>Aferido: </span>
                </strong>
                {rd_cliente.show[0].aferido}
                <br />
                <strong>
                  <span>N??mero do Certificado: </span>
                </strong>
                {rd_cliente.show[0]?.certificado}
                <br />

                <strong>
                  <span>T??cnico Executor: </span>
                </strong>
                {rd_cliente.show[0]?.executor}
                <br />
                <strong>
                  <span>T??cnico Conferente: </span>
                </strong>
                {rd_cliente.show[0]?.conferente}
                <br />
                <strong>
                  <span>T??nico Respons??vel: </span>
                </strong>
                {rd_cliente.show[0]?.responsavel}
                <br />
                <strong>
                  <span>Obs: </span>
                </strong>
                {rd_cliente.show[0]?.obs}
                <br />
              </div>
            </CCardBody>
          ) : null}
      </CContainer>
      </div>
    );
  }
);
