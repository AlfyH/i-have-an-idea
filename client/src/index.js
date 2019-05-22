import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./redux/store/index";
import AppRouter from './components/AppRouter';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<AppRouter />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  // document.getElementById("app")
  document.getElementById("root")
);

serviceWorker.unregister();
