import { Link } from 'react-router-dom';
import FavoriteList from '../../components/favorite-list/favorite-list';
import FavoriteListEmpty from '../../components/favorite-list-empty/favorite-list-empty';
import { useAppSelector } from '../../hooks/index';
import { getFavorites } from '../../store/favorites-process/favorites-process.selector';


function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector(getFavorites);

  return(
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length
            ? <FavoriteList offers={favorites}/>
            : <FavoriteListEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
