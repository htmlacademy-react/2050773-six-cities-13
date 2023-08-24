import { Link } from 'react-router-dom';
import FavoriteList from '../../components/favorite-list/favorite-list';
import FavoriteListEmpty from '../../components/favorite-list-empty/favorite-list-empty';
import { useAppSelector } from '../../hooks/index';


function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites);

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
