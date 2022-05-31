import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect, useDispatch } from "react-redux"
import { createStructuredSelector } from "reselect"
import {getMessages } from '../configStore'

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS'

const getThings = () => {
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch('v1/things.json')
      .then(resp => resp.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  }
}

const getThingsSuccess = (json) => {
  return {
    type: GET_THINGS_SUCCESS,
    json
  }
}

const HelloWorld = (prop) => {

  const { things } = prop;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [])

  const handleClick = () => {
    dispatch(getMessages());
  }


  return (
    <React.Fragment>
      Welcome to hello-rails-react!
      <br />

      {things.length > 0
        ? <>
        <div>Random greeting:</div>
          <div>{things[Math.floor(Math.random() * things.length)].text}</div>
          <button className="button" onClick={() => {
            handleClick()
          }}>Get another random greeting</button>
          <div>If you have a small number of messages, the message could by the same for probability reasons.</div>
        </>
        : <p>{'No greetings yet. Please open the Rails console and create/add a greeting by running "Greeting.create(text:"your text")"'}</p>
      }

    </React.Fragment>
  );
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
export { getThingsSuccess }
