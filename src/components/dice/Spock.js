import React from 'react';

// svg
import spock from '../../assets/icon-spock.svg';

export default function Spock({ onClick }) {
  return (
    <div
      className="dice spock"
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        hsl(189, 59%, 53%),
        hsl(189, 58%, 57%)
      )`,
      }}
      onClick={() => onClick('spock')}
    >
      <div className="inner-circle">
        <img src={spock} alt="dice" className="icon" />
      </div>
    </div>
  );
}
