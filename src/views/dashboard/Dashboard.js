import React, { useEffect, useState } from "react";
import {
  CCardGroup,
  CCardFooter,
  CCol,
  CLink,
  CRow,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple,
  CProgress,
} from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cliente } from "src/services/api";
import axios from "axios";

const Dashboard = () => {
  const [clientes, setClientes] = useState([]);

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

  return (
    <>
       <CWidgetProgressIcon
          header={clientes?.length}
          text="Clientes"
          color="gradient-success"
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
    </>
  );
};

export default Dashboard;
