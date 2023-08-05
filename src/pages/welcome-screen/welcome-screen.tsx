import CardList from '../../components/card-list/card-list.tsx';
import { TOffer } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../hooks/index/index.ts';
import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-lits.tsx';

type WelcomeScreenProps = {
  placesCount: number;
  offers: TOffer[];
  cities: string[];
}

function WelcomeScreen({placesCount, offers, cities}: WelcomeScreenProps): JSX.Element {
  const points = offers.map((offer) => offer.location);
  // const city = useAppSelector((state) => state.city);
  // const currentOffers = offers.filter((offer) => offer.city.name === city);
  // const [selectedOffer, setSelectedOffer] = useState<TOffer | undefined>(undefined);


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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
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
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={Number('0')}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={Number('0')}>Popular</li>
                  <li className="places__option" tabIndex={Number('0')}>Price: low to high</li>
                  <li className="places__option" tabIndex={Number('0')}>Price: high to low</li>
                  <li className="places__option" tabIndex={Number('0')}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offers[0].city} points={points} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeScreen;
