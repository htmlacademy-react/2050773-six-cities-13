import { Link, useNavigate } from 'react-router-dom';
import { TOffer } from '../../types/offer';
import { fetchChangeStatusFavoriteAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useState } from 'react';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import cn from 'classnames';

type CardProps = {
  offer: TOffer;
  onCardHover?: (offer: TOffer) => void;}

function Card({offer, onCardHover}: CardProps): JSX.Element {
  const {isPremium, previewImage, price, title, type, id, isFavorite} = offer;
  const dispatch = useAppDispatch();
  const [isFavoriteOffer, setFavoriteOffer] = useState<boolean>(isFavorite);
  const status = Number(!isFavoriteOffer);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  const handlerCardHover = (card: TOffer) => {
    if (onCardHover) {
      onCardHover(card);
    }
  };

  const favoriteButtonClickHandler = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      return navigate(AppRoute.Login);
    }
    setFavoriteOffer((prevState) => !prevState);
    dispatch(fetchChangeStatusFavoriteAction({status, id}));
    // console.log(isFavoriteOffer);
  };


  return (
    <article className="cities__card place-card"
      id={id}
      onMouseEnter={() => handlerCardHover(offer)}
    >
      {isPremium
        ? <div className="place-card__mark"><span>Premium</span></div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            type="button"
            className={ cn('place-card__bookmark-button button', { 'place-card__bookmark-button--active' : isFavoriteOffer }) }
            onClick={ favoriteButtonClickHandler }
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
