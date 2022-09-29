import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile/reducers';

export const store = createStore(combineReducers({ profile: profileReducer }),
window.__REDUX_DEVTOOLS_EXTENSION__
? window.__REDUX_DEVTOOLS_EXTENSION__()
: (args) => args
);