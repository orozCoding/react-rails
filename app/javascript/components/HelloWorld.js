import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS'

// const getThings = () => {
//   console.log('getting things action');
//   return {
//     type: GET_THINGS_REQUEST
//   }
// }

const getThings = () => {
  console.log('getting things action');
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST});
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


class HelloWorld extends React.Component {
  render () {
    const { things } = this.props;
    const thingList = things.map((thing) => {
      return <li>{thing.name} {thing.guid}</li>
    })
    return (
      <React.Fragment>
      Greeting: {this.props.greeting}
      <button className="button" onClick = { () => {
        this.props.getThings()
      }}>Get Things</button>
      <br />
      <ul>{thingList}</ul>
      </React.Fragment>
    );
  }
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
