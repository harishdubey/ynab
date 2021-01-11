import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;