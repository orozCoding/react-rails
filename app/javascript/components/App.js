import React from "react"
import PropTypes from "prop-types"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import { Provider } from "react-redux";
import theStore from '../configStore'

const store = theStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" render={() => (<div>'Hello'</div>)} />
            <Route path="/hello" element={<HelloWorld greeting="Here I am!" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
