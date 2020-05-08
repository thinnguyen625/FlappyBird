import React from 'react';
import Game from './components/Game'
import {Provider} from 'react-redux'

const App = ({store}) => {
  return (
    <Provider store = {store}>
       <Game />
    </Provider>
  );
} 

export default App; 