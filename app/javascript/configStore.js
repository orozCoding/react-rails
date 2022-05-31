import { configStore } from 'redux'

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

export default theStore = () => {
  const store = configStore(rootReducer, initialState);
  return store
}