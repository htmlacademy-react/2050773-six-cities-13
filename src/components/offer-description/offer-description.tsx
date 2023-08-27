import { TOfferDescription } from '../../types/offer';
// import { TReview } from '../../types/review';
import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../comment-form/comment-form';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchCommentsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { getComments } from '../../store/offer-id-process/offer-id-process.selector';

type OfferDescriptionProps = {
  offer: TOfferDescription;
};

function OfferDescription({offer}: OfferDescriptionProps): JSX.Element {
  const {id, images, isPremium, title, rating, type, bedrooms, maxAdults, price, host, goods, description, isFavorite} = offer;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getComments);
  const dispatch = useAppDispatch();
  const offerImages = images.slice(0,6);

  useEffect(() => {
    if (id) {
      dispatch(fetchCommentsAction(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offerImages.map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium && <div className="offer__mark"><span>Premium</span></div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            {/* <FavoriteButton onFavoriteClick={handleFavoriteClick} isFavoriteOffer={isFavorite} isOfferFullCard={isOfferFullCard} /> */}
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span>
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">{type}</li>
            <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
            <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
              </div>
              <span className="offer__user-name">{host.name}</span>
              {host.isPro && <span className="offer__user-status">Pro</span>}
            </div>
            <div className="offer__description">
              {description.split('.').map((item) => <p key={item.slice(0,10)} className="offer__text">{item}</p>)}
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
            <ReviewsList reviews={reviews} />
            {authorizationStatus === AuthorizationStatus.Auth && <CommentForm id={id} />}
          </section>
        </div>
      </div>
    </>
  );
}

export default OfferDescription;
