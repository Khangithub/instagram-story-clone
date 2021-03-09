import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import storyReducer from './story/storyReducer';

const store = createStore(
  storyReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
