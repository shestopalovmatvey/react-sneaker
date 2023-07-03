import React from "react";
import classes from './Header.module.scss'

export default function Header(props) {
  return (
    <header>
      <div className={classes.header}>
        <div className={classes.header__logo}>
          <img width={40} height={40} src="/img/logo.png" alt="img"></img>
          <div>
            <h2>REACT SNEAKERS</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <div className={classes.header__info}>
          <div onClick={props.handlerCartOpen}>
            <img width={18} height={18} src="/img/Cart.svg" alt="cart"></img>
            <p>{props.finalPrice} руб.</p>
          </div>

          <img width={18} height={18} src="/img/saved.svg" alt="cart"></img>

          <img width={18} height={18} src="/img/profile.svg" alt="cart"></img>
        </div>
      </div>
    </header>
  );
}
