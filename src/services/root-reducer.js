import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import {thunk} from 'redux-thunk'
import { servicesReducer } from './reducers/services-reducer';


export const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose; 

export const enhancer = composeEnhancers(applyMiddleware(thunk));

export const rootReducer = combineReducers({
    servicesReducer
});

export const store = createStore(rootReducer, enhancer);