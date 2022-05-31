import { createStore } from 'redux';

const initialState = {
  things: []
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type){
    default:
    return state
  }
}

const theStore = () => {
  const store = createStore(rootReducer, initialState);
  return store
}

export default theStore;