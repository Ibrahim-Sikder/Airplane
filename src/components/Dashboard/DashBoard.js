import React from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../../Shared/NavBar/NavBar";
import dynamic from "next/dynamic";
const DashBoard = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <SideBar />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(DashBoard), { ssr: false });
