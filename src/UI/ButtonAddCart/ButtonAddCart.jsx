import React from 'react'
import classes from './ButtonAddCart.module.scss'

export default function ButtonAddCart({isAdded, handlerIsAdded}) {
    return (
        <button className={classes.card__btn} onClick={handlerIsAdded}>
          {isAdded ? (
            <img src="img/btn-added.svg" alt="" />
          ) : (
            <img src="img/btn-add.svg" alt="" />
          )}
        </button>
    )
}
