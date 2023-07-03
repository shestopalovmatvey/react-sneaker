import React, { useState } from "react";

import clasess from "./Card.module.scss";

export default function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const handlerIsAdded = () => {
    props.addCartItem({
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      id: props.id,
    });
    setIsAdded(!isAdded);
  };
  return (
    <div className={clasess.card} key={props.id}>
      <img src={props.imageUrl} alt="cart"></img>
      <h5>{props.title}</h5>
      <div className={clasess.card__footer}>
        <div className={clasess.card__price}>
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>
        <button className={clasess.card__btn} onClick={handlerIsAdded}>
          <img
            src={isAdded ? "./img/btn-added.svg" : "./img/btn-add.svg"}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
