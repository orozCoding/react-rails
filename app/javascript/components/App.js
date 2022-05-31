import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HelloWorld from './HelloWorld';
import theStore from '../configStore';

const store = theStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HelloWorld greeting="Here I am!" things={store.things} />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
