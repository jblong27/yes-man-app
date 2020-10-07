import "regenerator-runtime/runtime";
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import forEachObjIndexed from 'ramda/src/forEachObjIndexed';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import * as sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const logger = ({getState}) => next => action => {
       return next(action);
     };
     const composeEnhancers = typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
           window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  // Create a store with saga middleware
     const myStore = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(logger, sagaMiddleware)))
  // Run the sagas
    forEachObjIndexed((saga) => {
       sagaMiddleware.run(saga);
    }, sagas);
  return myStore;
}