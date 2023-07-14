import React from "react";
import classes from "./BtnBack.module.scss"

export default function BtnBack({ children, handlerCartOpen }) {
  return (
    <button className={classes.btn__back} onClick={handlerCartOpen}>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7144 7L1.00007 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13L1 7L7 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </button>
  );
}
