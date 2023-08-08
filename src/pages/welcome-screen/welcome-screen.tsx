import CardList from '../../components/card-list/card-list.tsx';
import { TOffer } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../hooks/index/index.ts';
import CitiesList from '../../components/cities-list/cities-lits.tsx';
import Sort from '../../components/sort/sort.tsx';
import { CITIES } from '../../const.ts';
import { sorting } from '../../utils.ts';

type WelcomeScreenProps = {
  offers: TOffer[];
  cities: typeof CITIES;
}

function WelcomeScreen({offers, cities}: WelcomeScreenProps): JSX.Element {
  const points = offers.map((offer) => offer.location);
  const city = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.sortType);

  const currentOffers = sorting[sortType](offers.filter((offer) => offer.city.name === city));


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
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={currentOffers}/>
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
