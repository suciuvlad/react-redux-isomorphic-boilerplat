import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = {}, action) => state;

const middlewares = [thunk];

export default (initialState) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  )
}
