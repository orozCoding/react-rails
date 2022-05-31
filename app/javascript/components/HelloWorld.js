import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect, useDispatch } from "react-redux"
import { createStructuredSelector } from "reselect"
import {getMessages } from '../configStore'

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
  // let thingList = 'No messages yet'
  const { things } = prop;

  // useEffect(() => {

  //   if (things.length > 0) {
  //     let thingList = things.map((thing) => {
  //       return <li>{thing.text}</li>
  //     })
  //   }
  // }, things)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hey');
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
        // ? <ul>{things.map((thing) => { return <li>{thing.text}</li> })}</ul>
        ? <>
        <div>Random text:</div>
          <div>{things[Math.floor(Math.random() * things.length)].text}</div>
          <button className="button" onClick={() => {
            handleClick()
          }}>Get another random greeting</button>
          <div>If you have a small number of messages, the message could by the same for probability reasons.</div>
        </>
        : <p>{'No messages yet. Please open the Rails console and create/add a greeting by running "Greeting.create(text:"your text")"'}</p>
      }

    </React.Fragment>
  );
}


// class HelloWorld extends React.Component {
//   render () {
//     let thingList = 'No messages yet'
//     const { things } = this.props;

//     useEffect(() => {

//       if(things.length > 0) {
//         let thingList = things.map((thing) => {
//           return <li>{thing.text}</li>
//         })
//       }
//     }, things)


//     return (
//       <React.Fragment>
//       Greeting: {this.props.greeting}
//       <button className="button" onClick = { () => {
//         this.props.getThings()
//       }}>Get Things</button>
//       <br />
//       <ul>{thingList}</ul>
//       </React.Fragment>
//     );
//   }
// }

const structuredSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
export { getThingsSuccess }
