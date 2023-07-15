import React, { useState } from "react";
import classes from "./Drawer.module.scss";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartMain from "./CartMain/CartMain";
import { useSelector } from "react-redux";

export default function Drawer() {
  const {cart} = useSelector(state => state)

  const finalPrice = cart.reduce(
    (sum, current) => sum + current.price,
    0
  );
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {openDrawer && (
        <div className={classes.overlay}>
          <div className={classes.cart}>
            <div className={classes.cart__title}>
              <h2>Корзина</h2>
              <button onClick={() => setOpenDrawer((prev) => !prev)}>
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

            {cart.length > 0 ? (
              <CartMain items={cart} finalPrice={finalPrice}/>
            ) : (
              <CartEmpty
                handlerCartOpen={() => setOpenDrawer((prev) => !prev)}
              />
            )}
          </div>
        </div>
      )}
      {!openDrawer && (
        <div
          className={classes.cart__logo}
          onClick={() => setOpenDrawer((prev) => !prev)}
        >
          <img width={18} height={18} src="img/Cart.svg" alt="cart"></img>
          <p>{finalPrice} руб.</p>
        </div>
      )}
    </>
  );
}
