import React from "react"
import PropTypes from "prop-types"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" render={()=>(<div>'Hello'</div>)} />
          <Route path="/hello" element={<HelloWorld greeting="Here I am!"/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
