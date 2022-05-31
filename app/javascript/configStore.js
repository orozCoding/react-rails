import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  things: []
};

const getMessages = () => async (dispatch) => {

  const messages = await fetch('v1/things.json')
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => console.log(error));
  console.log('inside');
  console.log(messages);
  dispatch({
    type: 'GET_THINGS_SUCCESS',
    payload: messages
  })
}

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      // console.log(action.json.things);
      return { things: action.payload.things }
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
export { getMessages }