import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';

import App from './containers/App/App';


const DashApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default DashApp;
