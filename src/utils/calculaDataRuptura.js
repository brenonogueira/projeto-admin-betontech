import React, { useState } from "react";
import moment from "moment";

export const calculaDataRuptura = (data, diasSoma) => {
    const dataMoldagem = new Date(data);
    var dataRuptura = moment(dataMoldagem, "D/M/YYYY").add("day", diasSoma);
    var dataRupturaISO = dataRuptura.toDate().toISOString();
    const dataRupturaFormatada = moment.utc(dataRupturaISO).format("D/MM/YYYY");
    return dataRupturaFormatada;
  };