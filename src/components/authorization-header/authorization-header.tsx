import { useAppDispatch } from '../../hooks/index/index';
import { logoutAction } from '../../store/api-actions.ts';
import { AppRoute } from '../../const.ts';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const.ts';
import { Outlet } from 'react-router-dom';

type LoginProps = {
  authorizationStatus: AuthorizationStatus;
}

function AuthorizationHeader({authorizationStatus}: LoginProps):JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              {
                authorizationStatus === AuthorizationStatus.Auth
                  ?
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">666</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.Main} onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </ul>
                  :
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  </ul>
              }
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AuthorizationHeader;
