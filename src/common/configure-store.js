import { createStore } from 'redux';

const reducer = (state = {}, action) => state;

export default (initialState) => {
  const store = createStore(
    reducer,
    initialState
  );

  return store;
};
