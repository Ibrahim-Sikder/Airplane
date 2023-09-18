"use client"



import React, { useState } from "react";
import style from "./Dashboard.module.css";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Home,
  SettingsPhone,
  Diversity2,
  Diversity3,
  UploadFile,
  Comment,
  LogoutRounded,
  CalendarMonth,
  Description,
  FlightTakeoff,
  CheckCircleOutline,
  Settings,
  Loyalty,
} from "@mui/icons-material";

const DashboardLeft = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const showSidebar = () => {
    setToggleSideBar((toggleSideBar) => !toggleSideBar);
  };

  return (
    <aside>
      <div
        className={toggleSideBar ? `${style.sidebar}` : `${style.sideBarLeft}`}
      >
        <div
          className={
            toggleSideBar ? `${style.active}` : `${style.dashBoardLeftSide}`
          }
        >
          <div className={style.leftSideWrap}>
            <div>
               <Link href='/'> <h2 className="text-bold text-3xl text-white">Logo </h2> </Link>
            </div>
            
            <div>
              <ul className={style.profileInfo}>
                <li>
                  <Home/>
                  <Link href="/b2bsearch/partial">
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <SettingsPhone className="text-white" />
                  <Link href="/b2bsearch/returnChange">
                    <span>Reservation</span>
                  </Link>
                </li>
                <li>
                <Accordion className={style.AccordionWrap}>
                <div className={style.accordionDEtailsWrap}>
                  <AccordionSummary
                    className={style.accordionSummary}
                    expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={style.accordionTypograpy}>
                      <div className="flex ">
                        <Description className="mr-2 text-white" />
                        <span> Trips </span>
                      </div>
                    </Typography>
                  </AccordionSummary>
                </div>
                <AccordionDetails className={style.accordionDetails}>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span>Decide Where You Want to Go </span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span>DCheck the Travel Advice and Advisories.</span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span>Book Your Flight. </span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span>Take Care of Your Health.</span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span>Discover the Taj Maha</span>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </li>
                <li>
                <div className="flex my-2">
                  <Description className="mr-2 text-white" />
                  <Link href="/invoice-list">
                    <small> Invoices </small>
                  </Link>
                </div>
                </li>
                <li>
                <Accordion className={style.AccordionWrap}>
                <div className={style.accordionDEtailsWrap}>
                  <AccordionSummary
                    className={style.accordionSummary}
                    expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={style.accordionTypograpy}>
                      <div className="flex ">
                        <FlightTakeoff className=" text-white" />
                        <span> Planes </span>
                      </div>
                    </Typography>
                  </AccordionSummary>
                </div>
                <AccordionDetails className={style.accordionDetails}>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span>Amphibious</span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span> Helicopter.</span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span> Multi-Engine Piston</span>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </li>
                <li>
                <Accordion className={style.AccordionWrap}>
                <div className={style.accordionDEtailsWrap}>
                  <AccordionSummary
                    className={style.accordionSummary}
                    expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={style.accordionTypograpy}>
                      <div className="flex">
                        <Loyalty className="mr-2 text-white" />
                        <span> Amenities </span>
                      </div>
                    </Typography>
                  </AccordionSummary>
                </div>
                <AccordionDetails className={style.accordionDetails}>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span> Pet friendly </span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span> Swimming pool </span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span> Fitness Center </span>
                    </div>
                  </Typography>
                  <Typography className={style.typograpy}>
                    <div className="flex items-center">
                      <CheckCircleOutline className={style.checkIcon} />
                      <span> Covered Parking </span>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </li>
                <li>
                <div className="flex mb-3">
                <Description className="mr-2 text-white" />
                <span> Contacts </span>
              </div>
                </li>
                <li>
                <div className="flex mb-3">
                <Diversity2 className="mr-2 text-white" />
                <span> Team </span>
              </div>
                </li>
                <li>
                <div className="flex mb-3">
                <Diversity3 className="mr-2 text-white" />
                <span> Create Members </span>
              </div>
                </li>
                <li>
                <div className="flex mb-3">
                <UploadFile className="mr-2 text-white" />
                <span> Files </span>
              </div>
                </li>
                <li>
                <div className="flex mb-3">
                <Comment className="mr-2 text-white" />
                <span> Messages </span>
              </div>
                </li>
                <li>
                <div className="flex mb-3">
                <CalendarMonth className="mr-2 text-white" />
                <span> Calendar </span>
              </div>
                </li>
                <li>
                <div className="flex mb-3">
                <Settings className="mr-2 text-white" />
                <span> Setting </span>
              </div>
             
                </li>
                <li>
                <div className="flex mb-3">
                <LogoutRounded className="mr-2 text-white" />
                <span> Logout </span>
              </div>
                </li>
              </ul>
            </div>
           
          </div>
          <div className={toggleSideBar ? `${style.leftSideIconWrap}` : `${style.iconsBarHide}`} >
            <div>
              <p className={style.showToolTip}><Home className={style.icon} />
                <Link href=''>
                  <div className={`${style.toolTip} ${style.mainToolTip}`}>
                    <span>Dashboard</span>
                </div> </Link>

              </p>

              <p className={style.showToolTip}><SettingsPhone className={style.icon} />
                <Link href='/b2bsearch/partial'><div className={style.toolTip}>Reservation</div> </Link>
              </p>


              <p className={style.showToolTip}><Description className={style.icon} />
                <Link href='/b2bsearch/returnChange'><div className={`${style.toolTip} ${style.toolTip2}`}>Trips </div> </Link>
              </p>

              <p className={style.showToolTip}><Description className={style.icon} />
                <Link href='/adb2bsearchmin/transactions'><div className={`${style.toolTip} ${style.toolTip3}`}>Invoices </div> </Link>
              </p>
              <p className={style.showToolTip}><FlightTakeoff className={style.icon} />
                <Link href='/b2bsearch/payment'><div className={`${style.toolTip} ${style.toolTip4}`}>Plane </div> </Link>
              </p>
              <p className={style.showToolTip}><Loyalty className={style.icon} />
                <Link href='/b2bsearch/banklist'><div className={`${style.toolTip} ${style.toolTip5}`}>Aminites</div> </Link>
              </p>
              <p className={style.showToolTip}><Description className={style.icon} />
                <Link href='/b2bsearch/profile'><div className={`${style.toolTip} ${style.toolTip6}`}>Contact </div> </Link>
              </p>
              <p className={style.showToolTip}><Diversity2 className={style.icon} />
                <Link href='/b2bsearch/passenger'><div className={`${style.toolTip} ${style.toolTip7}`}>Team </div> </Link>
              </p>
              <p className={style.showToolTip}><Diversity3 className={style.icon} />
                <Link href='/b2bsearch/company'><div className={`${style.toolTip} ${style.toolTip8}`}>Create Members</div> </Link>
              </p>
              <p className={style.showToolTip}><UploadFile className={style.icon} />
                <Link href='/b2bsearch/company'><div className={`${style.toolTip} ${style.toolTip8}`}>File</div> </Link>
              </p>
              <p className={style.showToolTip}><Comment className={style.icon} />
                <Link href='/b2bsearch/company'><div className={`${style.toolTip} ${style.toolTip8}`}>Message </div> </Link>
              </p>
              <p className={style.showToolTip}><CalendarMonth className={style.icon} />
                <Link href='/b2bsearch/company'><div className={`${style.toolTip} ${style.toolTip8}`}>Calendar </div> </Link>
              </p>
              <p className={style.showToolTip}><Settings className={style.icon} />
                <Link href='/b2bsearch/company'><div className={`${style.toolTip} ${style.toolTip8}`}>Settings </div> </Link>
              </p>
              <p className={style.showToolTip}><LogoutRounded className={style.icon} />
                <Link href='/b2bsearch/company'><div className={`${style.toolTip} ${style.toolTip8}`}>Logout </div> </Link>
              </p>

            </div>
          </div>
          {/* tooltip */}

          <div onClick={showSidebar} className={style.bar}>
            <div>
              <span className={toggleSideBar ? ` ` : `${style.bar1}`}></span>
              <span className={toggleSideBar ? ` ` : `${style.bar2}`}></span>
              <span className={toggleSideBar ? ` ` : `${style.bar3}`}></span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardLeft;
