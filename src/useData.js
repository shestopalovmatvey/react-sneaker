import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export function useData() {
  const [items, setItems] = useState(defaultItems);
  const [cartItems, setCartItems] = useState([]);

  return {items, cartItems, setCartItems}
}

const defaultItems = [
    {
      id: uuidv4(),
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      imageUrl: "/img/sneakers/sneaker4.png",
    },
    {
      id: uuidv4(),
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      imageUrl: "/img/sneakers/sneaker3.png",
    },
    {
      id: uuidv4(),
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      imageUrl: "/img/sneakers/sneaker2.png",
    },
    {
      id: uuidv4(),
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imageUrl: "/img/sneakers/sneaker1.png",
    },
    {
      id: uuidv4(),
      title: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
      imageUrl: "/img/sneakers/sneaker6.png",
    },
    {
      id: uuidv4(),
      title: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
      imageUrl: "/img/sneakers/sneaker5.png",
    },
    {
      id: uuidv4(),
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
      imageUrl: "/img/sneakers/sneaker7.png",
    },
  ]
