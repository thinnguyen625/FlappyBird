import React from 'react';
import PbImage from '../images/pipe-bottom.png'
import PtImage from '../images/pipe-top.png'

const Pipe = () => {
  return (
    <div style={{ position: 'relative'}}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 100,
        width: 50,
        height: 200,
        background: `url(${PtImage})`,
        backgroundPosition: 'bottom',
      }}></div>

      <div style={{
        position: 'absolute',
        top: 300,
        left: 100,
        width: 50,
        height: 200,
        background: `url(${PbImage})`,
      }}></div>
    </div>
  );
}

export default Pipe;