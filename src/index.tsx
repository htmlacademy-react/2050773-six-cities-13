import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import {Setting} from './const.ts';
import { offers } from './mocks/offers.ts';
import { reviews } from './mocks/reviews.ts';
import { CITIES } from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={Setting.PacesCount}
        offers={offers}
        reviews={reviews}
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>
);
