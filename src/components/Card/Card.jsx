import clasess from "./Card.module.scss";
import ButtonAddCart from "../../UI/ButtonAddCart/ButtonAddCart";
import ButtonAddFavorite from "../../UI/ButtonAddFavorite/ButtonAddFavorite";
import { useDispatch, useSelector } from "react-redux";
import { actions as favoritesAction } from "../../redux/favorites/favorites.slice";
import { actions as cartAction } from "../../redux/cart/cart.slice";

export default function Card({ ...props }) {
  const { favorites } = useSelector((state) => state);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((elem) => elem.id === props.id);

  const isAdded = cart.some((elem) => elem.id === props.id);

  return (
    <div className={clasess.card} key={props.id}>
      <ButtonAddFavorite
        isFavorite={isFavorite}
        handlerIsFavorite={() =>
          dispatch(favoritesAction.toggleToFavorites({ ...props }))
        }
      />
      <img className={clasess.card__img} src={props.imageUrl} alt="cart"></img>
      <h5>{props.title}</h5>
      <div className={clasess.card__footer}>
        <div className={clasess.card__price}>
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>
        <ButtonAddCart
          isAdded={isAdded}
          handlerIsAdded={() => dispatch(cartAction.toggleToCart({ ...props }))}
        />
      </div>
    </div>
  );
}
