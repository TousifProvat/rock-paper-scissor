import React, { useContext, useEffect } from 'react';
import Dice from './dice/Dice';

// context
import { GlobalContext } from '../context/Context';

// dices
import Rock from './dice/Rock';
import Paper from './dice/Paper';
import Scissor from './dice/Scissor';
import Lizard from './dice/Lizard';
import Spock from './dice/Spock';

export default function DiceField({ onClick }) {
  const { myDice, botDice, setWinner, winner, loading } = useContext(
    GlobalContext
  );

  useEffect(() => {
    setWinner(myDice, botDice);
  }, [myDice]);

  return (
    <div className="dice-field">
      <div
        className={winner === 'me' ? 'my-dice diced winner' : 'my-dice diced'}
      >
        <span>YOU PICKED</span>
        {myDice === 'rock' && <Rock />}
        {myDice === 'paper' && <Paper />}
        {myDice === 'scissor' && <Scissor />}
        {myDice === 'lizard' && <Lizard />}
        {myDice === 'spock' && <Spock />}
      </div>
      {!loading && (
        <div className="game-result">
          <h2>
            {winner === 'me' && 'YOU WON'}
            {winner === 'bot' && 'YOU LOST'}
            {winner === 'none' && 'DRAW'}
          </h2>
          <button onClick={onClick} className="play-again">
            Play Again
          </button>
        </div>
      )}
      <div
        className={winner === 'bot' ? 'my-dice diced winner' : 'my-dice diced'}
      >
        <span>THE HOUSE PICKED</span>
        {loading ? (
          <Dice customClass={'blank'} />
        ) : (
          <div>
            {botDice === 'rock' && <Rock />}
            {botDice === 'paper' && <Paper />}
            {botDice === 'scissor' && <Scissor />}
            {botDice === 'lizard' && <Lizard />}
            {botDice === 'spock' && <Spock />}
          </div>
        )}
      </div>
    </div>
  );
}
