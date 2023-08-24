import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { reviews } from './mocks/reviews.ts';
import { CITIES } from './const.ts';
import ErrorMessage from './components/error-message/error-message.tsx';
import { checkAuthAction, fetchOffersAction } from './store/api-actions.ts';


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>
);
