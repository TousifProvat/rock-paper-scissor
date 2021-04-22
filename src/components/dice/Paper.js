import React from 'react';

// svg
import paper from '../../assets/icon-paper.svg';

export default function Paper({ onClick }) {
  return (
    <div
      className="dice paper"
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        hsl(230, 89%, 62%),
        hsl(230, 89%, 65%)
      )`,
      }}
      onClick={() => onClick('paper')}
    >
      <div className="inner-circle">
        <img src={paper} alt="dice" className="icon" />
      </div>
    </div>
  );
}
