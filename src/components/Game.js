import React from 'react';
import Bird from './Bird'
import Foreground from './Foreground'
import Pipe from './Pipe'
import BgImage from '../images/bg.png'


const Game = () => {
  return (
    <div style={{
      position: 'relative',
      width: 288,
      height: 512,
      background: `url(${BgImage})`,
    }}>
      <Bird />
      <Pipe />
      <Foreground />
    </div>
  );
}

export default Game;