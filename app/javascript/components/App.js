import React from "react"
import PropTypes from "prop-types"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import { Provider } from "react-redux";
import theStore from '../configStore'

const store = theStore();

const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HelloWorld greeting="Here I am!" things={store.things}/>} />
          </Routes>
        </BrowserRouter>
       </Provider> 
    );
}

export default App
