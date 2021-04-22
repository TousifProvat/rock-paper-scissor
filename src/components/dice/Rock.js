import React from 'react';

// svg
import rock from '../../assets/icon-rock.svg';

export default function Rock({ onClick }) {
  return (
    <div
      className="dice rock"
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        hsl(349, 71%, 52%),
        hsl(349, 70%, 56%)
      )`,
      }}
      onClick={() => onClick('rock')}
    >
      <div className="inner-circle">
        <img src={rock} alt="dice" className="icon" />
      </div>
    </div>
  );
}
