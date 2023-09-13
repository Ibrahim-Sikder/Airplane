'use client'


import React, {useState} from "react";
import {
  Home,
  SettingsPhone,
  ContactPhone,
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from './SideBar.module.css'
import Link from "next/link";
const SideBar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const handleToggleSideBar = () => {
    setToggleSideBar(()=> !toggleSideBar);
  };


  return (
    <div>
      <div className={toggleSideBar ? `${style.activeSideBar}` : `${style.sideBarLeft}`}>
      <div className={toggleSideBar ? `${style.sideBarWrap}` : `${style.activeSideBarWrap}`}>
        <div className="logo mt-5">
          <h3 className="text-3xl font-bold text-center mb-8">Logo </h3>
          <div>
            <div className="flex mb-3">
              <Home className="mr-2 text-white" />
              <small> Dashboard </small>
            </div>
            <div className="flex mb-3">
              <SettingsPhone className="mr-2 text-white" />
              <span> Reservations </span>
            </div>
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
                 <CheckCircleOutline className={style.checkIcon}/><span>Decide Where You Want to Go  </span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span>DCheck the Travel Advice and Advisories.</span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span>Book Your Flight. </span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span>Take Care of Your Health.</span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span>Discover the Taj Maha</span>
                 </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="flex my-2">
              <Description className="mr-2 text-white" />
            <Link href='/invoice-list'>  <small> Invoices </small></Link>
            </div>
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
              <FlightTakeoff className="mr-2 text-white" />
              <span> Planes </span>
            </div>
                </Typography>
              </AccordionSummary>
              </div>
              <AccordionDetails className={style.accordionDetails}>
              <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span>Amphibious</span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span> Helicopter.</span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span> Multi-Engine Piston</span>
                 </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
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
                 <CheckCircleOutline className={style.checkIcon}/><span> Pet friendly </span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span> Swimming pool </span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span> Fitness Center  </span>
                 </div>
                </Typography>
                <Typography className={style.typograpy}>
                 <div className="flex items-center">
                 <CheckCircleOutline className={style.checkIcon}/><span> Covered Parking </span>
                 </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          
            <div className="flex mb-3">
              <Description className="mr-2 text-white" />
              <span> Contacts </span>
            </div>
            <div className="flex mb-3">
              <Diversity2 className="mr-2 text-white" />
              <span> Team </span>
            </div>
            <div className="flex mb-3">
              <Diversity3 className="mr-2 text-white" />
              <span> Create Members </span>
            </div>
            <div className="flex mb-3">
              <UploadFile className="mr-2 text-white" />
              <span> Files </span>
            </div>
            <div className="flex mb-3">
              <Comment className="mr-2 text-white" />
              <span> Messages </span>
            </div>
            <div className="flex mb-3">
              <CalendarMonth className="mr-2 text-white" />
              <span> Calendar </span>
            </div>
            <div className="flex mb-3">
              <Settings className="mr-2 text-white" />
              <span> Setting </span>
            </div>
            <div className="flex mb-3">
              <LogoutRounded className="mr-2 text-white" />
              <span> Logout </span>
            </div>
          </div>
        </div>

        <div className="flex">
        <div className={toggleSideBar ? `${style.iconWrap}` : 'hidden'}>
          
          <div className={style.showToolTip}><Home className={style.icon} />
            <div className={style.toolTip}> Dashboard </div>
          </div>
          <div className={style.showToolTip}><SettingsPhone className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip2}` }> Reservation </div>
          </div>
          <div className={style.showToolTip}><Description className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip3}` }> Trips </div>
          </div>
          <div className={style.showToolTip}><Description className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip4}` }> Invoices </div>
          </div>
          <div className={style.showToolTip}><FlightTakeoff className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip5}` }> Plane </div>
          </div>
          <div className={style.showToolTip}><Loyalty className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip6}` }> Aminites </div>
          </div>
          <div className={style.showToolTip}><Description className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip7}` }> Contact </div>
          </div>
          <div className={style.showToolTip}><Diversity2 className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip8}` }> Team </div>
          </div>
          <div className={style.showToolTip}><Diversity3 className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip9}` }> Create Members  </div>
          </div>
          <div className={style.showToolTip}><UploadFile className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip10}` }> Files </div>
          </div>
          <div className={style.showToolTip}><Comment className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip11}` }> Messages  </div>
          </div>
          <div className={style.showToolTip}><CalendarMonth className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip12}` }> Calendar </div>
          </div>
          <div className={style.showToolTip}><Settings className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip13}` }> Settings </div>
          </div>
          <div className={style.showToolTip}><LogoutRounded className={style.icon} />
            <div className={`${style.toolTip} ${style.toolTip13}` }> Logout </div>
          </div>
        </div>
        <div onClick={handleToggleSideBar} className={style.bar}>
            <div>
              <span className={toggleSideBar ? ` ` : `${style.bar1}`}></span>
              <span className={toggleSideBar ? ` ` : `${style.bar2}`}></span>
              <span className={toggleSideBar ? ` ` : `${style.bar3}`}></span>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default SideBar;
