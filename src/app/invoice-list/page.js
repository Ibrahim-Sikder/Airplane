"use client"


import React from "react";
import style from "../../components/Dashboard/Dashboard.module.css";
import DashboardLeft from "@/components/Dashboard/DashboardLeft";
import InvoiceList from '../../components/Invoices/InvoiceList'
import dynamic from 'next/dynamic'
const page = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <DashboardLeft/>
        </div>
        <div className={style.rightSideBar}>
            <InvoiceList/>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
