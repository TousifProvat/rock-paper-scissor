import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';

// svg
import gameTitle from '../assets/logo-bonus.svg';

export default function Scoreboard() {
  const { score } = useContext(GlobalContext);
  return (
    <div className="score-board">
      <div className="game-title">
        <img src={gameTitle} alt="game-title" />
      </div>
      <div className="score">
        <h4 className="score-text">SCORE</h4>
        <span className="score-number">{score}</span>
      </div>
    </div>
  );
}
