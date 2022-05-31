import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getMessages } from '../configStore';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

const getThingsSuccess = (json) => ({
  type: GET_THINGS_SUCCESS,
  json,
});

const getThings = () => (dispatch) => {
  dispatch({ type: GET_THINGS_REQUEST });
  return fetch('v1/things.json')
    .then((resp) => resp.json())
    .then((json) => dispatch(getThingsSuccess(json)))
    .catch((error) => error);
};

const HelloWorld = (prop) => {
  const { things } = prop;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  const handleClick = () => {
    dispatch(getMessages());
  };

  return (
    <>
      Welcome to hello-rails-react!
      <br />

      {things.length > 0
        ? (
          <>
            <div>Random greeting:</div>
            <div>{things[Math.floor(Math.random() * things.length)].text}</div>
            <button
              type="button"
              className="button"
              onClick={() => {
                handleClick();
              }}
            >
              Get another random greeting
            </button>
            <div>
              If you have a small number of messages,
              the message could by the same for probability reasons.
            </div>
          </>
        )
        : (
          <p>
            No greetings yet. Please open the Rails console and create/add a greeting by running
            &quot;Greeting.create(text: &quot;your_text&quot;)&quot;
          </p>
        )}

    </>
  );
};

const structuredSelector = createStructuredSelector({
  things: (state) => state.things,
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
export { getThingsSuccess };
