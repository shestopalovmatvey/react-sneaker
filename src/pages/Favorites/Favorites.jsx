import React from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Favorites({
  addCartItem,
}) {
  const {favorites} = useSelector(state => state);
  
  return (
    <div className="content">
      <div className="content__header__favorites">
        <Link to={"/"}>
          <img width={32} height={32} src="./img/btn-back.svg" alt="Назад" />
        </Link>
        <h1>Мои закладки</h1>
      </div>

      <div className="cards">
        {favorites.map((elem) => (
          <Card
            {...elem}
            addCartItem={addCartItem}
            key={elem.id}
          />
        ))}
      </div>
    </div>
  );
}
