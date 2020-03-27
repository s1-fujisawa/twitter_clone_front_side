import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducers from "./reducers"

import { Provider } from "react-redux"
import thunk from 'redux-thunk';
import { createBrowserHistory} from 'history';
import logger from 'redux-logger'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';

const history = createBrowserHistory();

const persistConfig = {
    key: 'test',
    storage,
    //blacklist: ['tweet'] 
}

const persistedReducer = persistReducer(persistConfig, rootReducers(history));

const store = createStore(
    //rootReducers(history),
    persistedReducer,
    applyMiddleware(
        thunk,
        routerMiddleware(history),
    )
)

const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
