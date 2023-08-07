import { changeCity, fillOffersList } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { TOffer } from '../../types/offer';
import classNames from 'classnames';

type CitiesListProps = {
  cities: string[];
  offers: TOffer[];
};

function CitiesList({cities, offers}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityCheck = (city: string) => {
    dispatch(changeCity({city}));
    dispatch(fillOffersList({offers}));
  };

  const activeCity = useAppSelector((state) => state.city);

  return(
    <ul className="locations__list tabs__list">
      {cities && cities.map((city) => (
        <li
          key={city}
          className="locations__item"
        >
          <a
            className={
              classNames('locations__item-link tabs__item',
                {'tabs__item--active': city === activeCity}
              )
            }
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleCityCheck(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>))}
    </ul>
  );
}
export default CitiesList;
