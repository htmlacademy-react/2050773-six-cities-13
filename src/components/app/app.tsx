import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFound from '../../pages/not-found/not-found';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { TOffer } from '../../types/offer';
import { TReview } from '../../types/review';

type AppScreenProps = {
  placesCount: number;
  offers: TOffer[];
  reviews: TReview[];
  cities: string[];
}

function App({placesCount, offers, reviews, cities}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen placesCount={placesCount} offers = {offers} cities={cities} />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favotites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen offers={offers} /></PrivateRoute>} />
          <Route path={AppRoute.Offer} element={<OfferScreen offers={offers} reviews={reviews} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
