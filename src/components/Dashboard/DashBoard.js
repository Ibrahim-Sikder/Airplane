"use client"


import React from "react";
import style from "./Dashboard.module.css";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import dynamic from 'next/dynamic'
const DashBoard = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <DashboardLeft/>
        </div>
        <div className={style.rightSideBar}>
          <DashboardRight />
        </div>
      </div>
    </section>
  );
};


export default dynamic(() => Promise.resolve(DashBoard), { ssr: false });
