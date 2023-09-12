'use client'


import React from "react";
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
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from './SideBar.module.css'
const SideBar = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className="logo mt-5">
          <h3 className="text-3xl font-bold mb-8">Logo </h3>
          <div>
            <div className="flex mb-5">
              <Home className="mr-2 text-white" />
              <small> Dashboard </small>
            </div>
            <div className="flex mb-5">
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
                <Typography>
                  <span>Trips IDs</span>
                </Typography>
                <Typography>
                  <span>Flowers </span>
                </Typography>
                <Typography>
                  <span>Drinks </span>
                </Typography>
                <Typography>
                  <span>Foods </span>
                </Typography>
                <Typography>
                  <span>Planes  </span>
                </Typography>
                <Typography>
                  <span>Airbus  </span>
                </Typography>
                <Typography>
                  <span>Helicopters  </span>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="flex my-2">
              <Description className="mr-2 text-white" />
              <small> Invoices </small>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
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
              <Home className="mr-2 text-white" />
              <span> Amenities </span>
            </div>
                </Typography>
              </AccordionSummary>
              </div>
              <AccordionDetails className={style.accordionDetails}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          
            <div className="flex mb-5">
              <Description className="mr-2 text-white" />
              <span> Contacts </span>
            </div>
            <div className="flex mb-5">
              <Diversity2 className="mr-2 text-white" />
              <span> Team </span>
            </div>
            <div className="flex mb-5">
              <Diversity3 className="mr-2 text-white" />
              <span> Create Members </span>
            </div>
            <div className="flex mb-5">
              <UploadFile className="mr-2 text-white" />
              <span> Files </span>
            </div>
            <div className="flex mb-5">
              <Comment className="mr-2 text-white" />
              <span> Messages </span>
            </div>
            <div className="flex mb-5">
              <CalendarMonth className="mr-2 text-white" />
              <span> Calendar </span>
            </div>
            <div className="flex mb-5">
              <ContactPhone className="mr-2 text-white" />
              <span> Setting </span>
            </div>
            <div className="flex mb-5">
              <LogoutRounded className="mr-2 text-white" />
              <span> Logout </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
