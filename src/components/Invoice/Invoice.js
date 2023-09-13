'use client'


import React, {useRef } from "react";
import style from "./invoice.module.css";
import dynamic from "next/dynamic";
import { useReactToPrint } from 'react-to-print';
import InvoicDownloadBtn from '../../Shared/InvoiceDownloadBtn/InvoicDownloadBtn'

const Invoice = () => {
    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
      onAfterPrint: ()=> alert('Print success')
    });

  

  return (
    <div >
      <div ref={componentRef} className={style.downloadInvoiceWrap}>
        <div className={style.invoicWrap}>
          <div className={style.invoice}>
            <div>
              <div>
                <strong>Invoice No </strong>
                <span>#I909112</span>
              </div>
              <small>Date : 07/09/2022</small>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Logo </h3>
            </div>
            <div className={style.agentInfo}>
              <p>1474 Avenue Kwame</p>
              <p>NKRUMAH 10 BP 13395</p>
              <p>10 Ouagadougou, Burkina Faso</p>
              <p>finance@lizetransport.com</p>
              <p>+1 (226) 50 272383</p>
            </div>
          </div>
          <hr className="w-full mt-5 mb-10" />
          <div className={style.invoice}>
            <div>
              <div>
                <strong>Invoice To: </strong>
              </div>
              <div className={style.agentInfo}>
                <p>Jhon Doe </p>
                <p>Lize Transport Organization</p>
                <p>+1 (226) 50 272383 </p>
              </div>
            </div>

            <div className={style.agentInfo}>
              <p>1474 Avenue Kwame, </p>
              <p>NKRUMAH 10 BP 13395</p>
              <p>10 Ouagadougou, Burkina Faso</p>
              <p>finance@lizetransport.com</p>
            </div>
          </div>

          <table className={style.productDetails}>
            <tr>
              <th>Products :</th>
              <th>Description : </th>
              <th>Reservation : </th>
              <th>Trip : </th>
              <th>Total : </th>
            </tr>
            <tr>
              <td>Champagne TC</td>
              <td>Added after reservation</td>
              <td>R2390</td>
              <td>T2390</td>
              <td>4.900.900</td>
            </tr>
            <tr>
              <td>Coca-Cola 20oz Can</td>
              <td>Added after reservation</td>
              <td>R2390</td>
              <td>T2390</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td>Falcon8X TBA/LTI</td>
              <td>Private jet</td>
              <td>R2390</td>
              <td>T2390</td>
              <td>11.500.000</td>
            </tr>
            <tr>
              <td>Falcon8X TBA/LTI</td>
              <td>Private jet</td>
              <td>R2390</td>
              <td>T2390</td>
              <td>11.500.000</td>
            </tr>
          </table>

          <hr className="w-full mt-5 mb-10" />

          <div className={style.subTotal}>
            <div>
              <div className={style.totalWrap}>
                <div className={style.subTotals}>
                  <div>
                    <strong>Subtotal :</strong> <br />
                    <strong>TVA :</strong>
                  </div>
                  <div>
                    <small>16.550.000</small> <br />
                    <small>2.800.000</small>
                  </div>
                </div>
                <hr className="w-full my-3" />
                <div className={style.subTotals}>
                  <div>
                    <strong>Total :</strong>
                  </div>
                  <div>
                    <small> 19.350.000 </small>
                  </div>
                </div>
                <hr className="w-full my-3" />
              </div>
            </div>
          </div>
          <button className={style.downloadPdfBtn} onClick={handlePrint}>Download Invoice </button>
        </div>
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Invoice), { ssr: false });

