import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  const handlerCartOpen = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const addCartItem = (item) => {
    const itemInCart = cartItems.find((elem) => elem.id === item.id);
    if (!itemInCart) {
      setCartItems([...cartItems, item]);
    } else {
      return;
    }
  };

  const deleteCartItem = (id) => {
    const newCartItems = cartItems.filter((elem) => elem.id !== id);
    setCartItems([...newCartItems]);
  };

  const handlerSetPrice = (value) => {
    setFinalPrice(value);
  };

  React.useEffect(() => {
    fetch("https://649d6ea09bac4a8e669dbb46.mockapi.io/items").then(
      (response) =>
        response.json().then((json) => {
          const newItems = [...json];
          newItems.forEach((element) => {
            element.id = uuidv4();
          });
          setItems(newItems);
        })
    );
  }, []);

  return (
    <div className="wrapper">
      <Drawer
        items={cartItems}
        isOpen={cartIsOpen}
        handlerCartOpen={handlerCartOpen}
        deleteCartItem={deleteCartItem}
        handlerSetPrice={handlerSetPrice}
      />
      <Header handlerCartOpen={handlerCartOpen} finalPrice={finalPrice} />

      <div className="content">
        <div className="content__header">
          <h1>Все кроссовки</h1>

          <div className="content__search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                stroke="#E4E4E4"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards">
          {items.map((elem) => (
            <Card {...elem} addCartItem={addCartItem} key={elem.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
