import React from "react";
import classes from '../Drawer.module.scss'

import { useDispatch } from "react-redux";

import { actions as cartAction } from "../../../redux/cart/cart.slice";

export default function CartMain({items, finalPrice}) {

  const dispatch = useDispatch();
  return (
    <div className={classes.cart__main}>
      <div className={classes.cart__elements}>
        {items.map((elem) => (
          <div className={classes.cart__element}>
            <img src={elem.imageUrl} alt="sneaker"></img>
            <div className={classes.cart__info}>
              <div>
                <p>{elem.title}</p>
                <b>{elem.price} руб.</b>
              </div>
              <button
                onClick={() => dispatch(cartAction.toggleToCart(elem))}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.cart__footer}>
        <ul>
          <li>
            <span>Итого: </span>
            <div></div>
            <b>{finalPrice} руб. </b>
          </li>
          <li>
            <span>Налог 5%: </span>
            <div></div>
            <b>{Math.floor(finalPrice * 0.05)} руб. </b>
          </li>
        </ul>

        <button>
          Оформить заказ{" "}
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H14.7143"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71436 1L14.7144 7L8.71436 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
