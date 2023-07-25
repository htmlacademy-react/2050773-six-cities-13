import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFound from '../../pages/not-found/not-found';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offer';

type AppScreenProps = {
  placesCount: number;
  offers: Offer[];
}

function App({placesCount, offers}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen placesCount = {placesCount} offers = {offers} />} />
        </Routes>
        <Routes>
          <Route path={AppRoute.Login} element={<LoginScreen />} />
        </Routes>
        <Routes>
          <Route path={AppRoute.Favotites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen offers={offers} /></PrivateRoute>} />
        </Routes>
        <Routes>
          <Route path={AppRoute.Offer} element={<OfferScreen offers={offers} />} />
        </Routes>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
