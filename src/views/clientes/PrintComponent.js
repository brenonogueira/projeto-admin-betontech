import CIcon from '@coreui/icons-react';
import { CButton } from '@coreui/react';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import  {ModalImpressaoContent}  from '../clientes/ModalImpressaoContent';

export default function  PrintComponent ({  modalOpen, setOpen, relatorio, setRelatorio, dataAferido}) {
    const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <div><CButton style={{marginLeft: '20px' }}  className="bg-gray-900"><CIcon size='lg' name="cil-print" alt="Delete" /></CButton></div>}
        content={() => componentRef.current} 
      />
     <div style={{ display: "none" }}> <ModalImpressaoContent ref={componentRef}  /></div>
    </div>
  );
};