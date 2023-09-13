import React from "react";
import style from "./NavBar.module.css";
import {
  Search,
  Notifications,
  Person3,
  MarkUnreadChatAlt,
  KeyboardArrowDown,
  Message,
} from "@mui/icons-material";
const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className={style.navBarWrap}>
        <div className={style.searchBox}>
          <div className="flex">
            <Search className={style.searchIcon} />
            <small>Search </small>
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.notificationWrap}>
            <Message className={style.rightSideIcon} />
            <small className={style.message}>5</small>
          </div>
          <div className={style.notificationWrap}>
            <Notifications className={style.rightSideIcon} />
            <small className={style.notification}>3</small>
          </div>
          <div className="flex items-center">
            <div className={style.user}>
              <Person3 className={style.rightSideIcon} />
            </div>
            <KeyboardArrowDown className={style.rightSideIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
