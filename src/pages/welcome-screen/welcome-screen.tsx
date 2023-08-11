import CardList from '../../components/card-list/card-list.tsx';
import { TOffer } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../hooks/index/index.ts';
import CitiesList from '../../components/cities-list/cities-lits.tsx';
import Sort from '../../components/sort/sort.tsx';
import { CITIES, AuthorizationStatus } from '../../const.ts';
import { sorting } from '../../utils.ts';
import { useState } from 'react';
import AuthorizedUser from '../../components/authorized-user/authorized-user.tsx';

type WelcomeScreenProps = {
  offers: TOffer[];
  cities: typeof CITIES;
  authorizationStatus: AuthorizationStatus;
}

function WelcomeScreen({offers, cities, authorizationStatus}: WelcomeScreenProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.sortType);

  const currentOffers = sorting[sortType](offers.filter((offer) => offer.city.name === city));

  const [selectedOffer, setSelectedOffer] = useState<TOffer | undefined>(undefined);

  const handleCardHover = (point: TOffer) => {
    const currentPoint = offers.find((offer) => offer.id === point.id);

    setSelectedOffer(currentPoint);
  };


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <AuthorizedUser />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities} offers={offers} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={currentOffers} onCardHover={handleCardHover}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={currentOffers} selectedOffer={selectedOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeScreen;
