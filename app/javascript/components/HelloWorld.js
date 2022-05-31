import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'

const getThings = () => {
  console.log('getting things action');
  return {
    type: GET_THINGS_REQUEST
  }
}



class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
      Greeting: {this.props.greeting}
      <button className="button" onClick = { () => {
        this.props.getThings()
      }}>Get Things</button>
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
