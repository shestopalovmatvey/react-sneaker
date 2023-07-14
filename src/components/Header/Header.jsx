import React from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";

export default function Header() {
  return (
    <header>
      <div className={classes.header}>
        <Link to={"/"}>
          <div className={classes.header__logo}>
            <img width={40} height={40} src="/img/logo.png" alt="img"></img>
            <div>
              <h2>REACT SNEAKERS</h2>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>

        <div className={classes.header__info}>
          <Drawer />

          <Link to={"/favorites"}>
            <img width={18} height={18} src="/img/saved.svg" alt="cart"></img>
          </Link>

          <Link to={"/profile"}>
            <img width={18} height={18} src="/img/profile.svg" alt="cart"></img>
          </Link>
        </div>
      </div>
    </header>
  );
}
