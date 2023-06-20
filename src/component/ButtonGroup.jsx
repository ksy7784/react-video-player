import React from 'react'

function ButtonGroup({ playVid, pauseVid, stopVid }) {
  return (
    <div className="btn-group">
    <button className="play" onClick={playVid}>
      재생
    </button>
    <button className="pause" onClick={pauseVid}>
      일시정지
    </button>
    <button className="stop" onClick={stopVid}>
      중지
    </button>
  </div>
  );
};

export default ButtonGroup