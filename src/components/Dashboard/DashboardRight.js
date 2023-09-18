"use client"


import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import NavBar from "@/Shared/NavBar/NavBar";
import Invoices from "../Invoices/Invoices";


const DashboardRight = () => {
  return (
    <article className={styles.rightSideWrap}>
     <div>
      <NavBar/>
      <Invoices/>
     </div>

     
    </article>
  );
};

export default DashboardRight;
