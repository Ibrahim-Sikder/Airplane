"use client";

import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import style from "./Invoices.module.css";
import dynamic from "next/dynamic";
import { DeleteSweep, BorderColor } from "@mui/icons-material"

const Invoices = () => {
  return (
    <div>
         <NavBar />
         <div className={style.invoicesWrap}>
           
           <div className={style.invoiceListWrap}>
          
           <div className="flex justify-between items-center w-full">
         <div className="mb-8 mt-5">
           <h6 className="text-2xl font-bold">Invoices</h6>
           <small>Invoices / New Invoice </small>
         </div>
         <div>
           <div className={style.addInvoice}>
             <div className={style.plusIcon}>+</div>
             <button>Add Invoice </button>
           </div>
         </div>
       </div>
             <table className={style.invoiceListTable}>
               <thead>
                 <tr>
                   <th>Invoice No: </th>
                   <th>Trip: </th>
                   <th>Inv.Date </th>
                   <th>Inv.Amount </th>
                   <th>Bal.Due</th>
                   <th>Payment Method</th>
                   <th>Due Date</th>
                   <th>Status</th>
                   <th colSpan="2">Action </th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>I909112 </td>
                   <td>T901122 </td>
                   <td>23/08/2022 </td>
                   <td>13.500.000 </td>
                   <td>4.500.000 </td>
                   <td>ACH </td>
                   <td>01/31/2023 </td>
                   <td>
                     {" "}
                     <span className="bg-[#FDE1E1] font-xs rounded py-[2px] px-2">
                       Unpaid{" "}
                     </span>
                   </td>
                   <td>
                     <span className="bg-[#ECF6FE] rounded px-2 py-[2px] ">
                       <BorderColor className={style.editIcon} />
                     </span>{" "}
                   </td>
                   <td>
                     <span className="bg-[#F24923] text-white rounded px-2">
                       <DeleteSweep className={style.editIcon} />
                     </span>{" "}
                   </td>
                 </tr>
                 <tr>
                   <td>I909112 </td>
                   <td>T901122 </td>
                   <td>23/08/2022 </td>
                   <td>13.500.000 </td>
                   <td>4.500.000 </td>
                   <td>ACH </td>
                   <td>01/31/2023 </td>
                   <td>
                     {" "}
                     <span className="bg-[#FDE1E1] font-xs rounded px-2">
                       Unpaid{" "}
                     </span>
                   </td>
                   <td>
                     <span className="bg-[#ECF6FE] rounded px-2">
                       <BorderColor className={style.editIcon} />
                     </span>{" "}
                   </td>
                   <td>
                     <span className="bg-[#F24923] text-white rounded px-2">
                       <DeleteSweep className={style.editIcon} />
                     </span>{" "}
                   </td>
                 </tr>
                 <tr>
                   <td>I909112 </td>
                   <td>T901122 </td>
                   <td>23/08/2022 </td>
                   <td>13.500.000 </td>
                   <td>4.500.000 </td>
                   <td>ACH </td>
                   <td>01/31/2023 </td>
                   <td>
                     {" "}
                     <span className="bg-[#FDE1E1] font-xs rounded px-2">
                       Unpaid{" "}
                     </span>
                   </td>
                   <td>
                     <span className="bg-[#ECF6FE] rounded px-2">
                       <BorderColor className={style.editIcon} />
                     </span>{" "}
                   </td>
                   <td>
                     <span className="bg-[#F24923] text-white rounded px-2">
                       <DeleteSweep className={style.editIcon} />
                     </span>{" "}
                   </td>
                 </tr>
                 <tr>
                   <td>I909112 </td>
                   <td>T901122 </td>
                   <td>23/08/2022 </td>
                   <td>13.500.000 </td>
                   <td>4.500.000 </td>
                   <td>ACH </td>
                   <td>01/31/2023 </td>
                   <td>
                     {" "}
                     <span className="bg-[#FDE1E1] font-xs rounded px-2">
                       Unpaid{" "}
                     </span>
                   </td>
                   <td>
                     <span className="bg-[#ECF6FE] rounded px-2">
                       <BorderColor className={style.editIcon} />
                     </span>{" "}
                   </td>
                   <td>
                     <span className="bg-[#F24923] text-white rounded px-2">
                       <DeleteSweep className={style.editIcon} />
                     </span>{" "}
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Invoices), { ssr: false });
