import React from 'react';

// svg
import lizard from '../../assets/icon-lizard.svg';

export default function Lizard({ onClick }) {
  return (
    <div
      className="dice lizard"
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        hsl(261, 73%, 60%),
        hsl(261, 72%, 63%)
      )`,
      }}
      onClick={() => onClick('lizard')}
    >
      <div className="inner-circle">
        <img src={lizard} alt="dice" className="icon" />
      </div>
    </div>
  );
}
