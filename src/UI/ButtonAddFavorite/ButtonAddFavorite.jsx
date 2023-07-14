import React from "react";
import classes from "./ButtonAddFavorite.module.scss";

export default function ButtonAddFavorite({ isFavorite, handlerIsFavorite }) {
  console.log()
  return (
    <div className={classes.img__like} onClick={handlerIsFavorite}>
      {isFavorite ? (
        <img src="./img/like.svg" alt=""></img>
      ) : (
        <img src="./img/unlike.png" alt=""></img>
      )}
    </div>
  );
}
