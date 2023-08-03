import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const.ts';
import { offers } from './mocks/offers.ts';
import { reviews } from './mocks/reviews.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PacesCount}
      offers={offers}
      reviews={reviews}

    />
  </React.StrictMode>
);
