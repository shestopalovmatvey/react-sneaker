import React from "react";
import classes from "../Drawer.module.scss";
import BtnBack from "../../../UI/BtnBack/BtnBack";

export default function CartEmpty({ handlerCartOpen }) {
  return (
    <div className={classes.cart__empty}>
      <img width={120} height={120} src="./img/box.png" alt="box" />
      <b>Корзина пустая</b>
      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <BtnBack handlerCartOpen={handlerCartOpen}>Вернуться назад</BtnBack>
    </div>
  );
}
