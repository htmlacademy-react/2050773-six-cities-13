import CardList from '../../components/card-list/card-list.tsx';
import { TOffer } from '../../types/offer.ts';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../hooks/index/index.ts';
import CitiesList from '../../components/cities-list/cities-lits.tsx';
import Sort from '../../components/sort/sort.tsx';
import { sorting } from '../../utils.ts';
import { useState } from 'react';
import { getCity, getSortType } from '../../store/offers-process/offers-process.selector.ts';
import MainEmpty from '../../components/main-empty/main-empty.tsx';
import classNames from 'classnames';


type WelcomeScreenProps = {
  offers: TOffer[];
}

function WelcomeScreen({offers}: WelcomeScreenProps): JSX.Element {

  const city = useAppSelector(getCity);
  const sortType = useAppSelector(getSortType);
  const currentOffers = sorting[sortType](offers.filter((offer) => offer.city.name === city));
  const [selectedOffer, setSelectedOffer] = useState<TOffer | undefined>(undefined);

  const handleCardHover = (point: TOffer) => {
    const currentPoint = offers.find((offer) => offer.id === point.id);
    setSelectedOffer(currentPoint);
  };

  return (
    <main className={`page__main page__main--index ${!currentOffers.length ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      {
        currentOffers.length
          ?
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
          :
          <MainEmpty city={city}/>
      }

    </main>
  );
}

export default WelcomeScreen;
