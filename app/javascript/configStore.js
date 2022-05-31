import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  things: [{
    name: 'test',
    guid: '123'
  },
  {
    name: 'two',
    guid: '222'
  }]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return { things: action.json.things }
    default:
      return state
  }
}

const theStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools
    (applyMiddleware(thunk)));
  return store
}

export default theStore;