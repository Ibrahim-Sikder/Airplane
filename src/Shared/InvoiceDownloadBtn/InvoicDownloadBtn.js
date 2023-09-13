'use client'

import Invoice from '../../components/Invoice/Invoice'
import React, {useRef} from 'react';
import style from './Invoice.module.css'
import { useReactToPrint } from 'react-to-print';

const InvoicDownloadBtn = () => {
    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
      onAfterPrint: ()=> alert('Print success')
    });

  
    
    return (
        <div  ref={componentRef} >
           <div > 
           <div >
                <h3>hello</h3>
                <button onClick={handlePrint}>Download Invoice</button>
            </div>
           </div>
            
        </div>
    );
};

export default InvoicDownloadBtn;