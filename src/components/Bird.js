import React from 'react';
import BirdImage from '../images/bird.png'

const Bird = () => {
  return (
    <div style={{
      position: 'absolute',
      left: 100,
      top: 250,
      width: 38,
      height: 26,
      background: `url(${BirdImage})`,
    }}></div>
  );
}

export default Bird;