import React from 'react';

// svg
import scissor from '../../assets/icon-scissors.svg';

export default function Scissor({ onClick }) {
  return (
    <div
      className="dice scissor"
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        hsl(39, 89%, 49%),
        hsl(40, 84%, 53%)
      )`,
      }}
      onClick={() => onClick('scissor')}
    >
      <div className="inner-circle">
        <img src={scissor} alt="dice" className="icon" />
      </div>
    </div>
  );
}
