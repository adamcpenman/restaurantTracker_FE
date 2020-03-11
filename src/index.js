import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from "redux-thunk";
import logger from "redux-logger";
import {createBrowserHistory} from "history";
import { Router } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { exerciseReducer } from "./reducers/reducers"

import { ContactContextProvider } from './reducers/reducers';


export const history = createBrowserHistory();

const store = createStore(exerciseReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContactContextProvider>
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  </ContactContextProvider>,
  rootElement
);