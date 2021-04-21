import React, { useContext, useEffect } from 'react';
import Dice from './dice/Dice';

// svgs

import Rock from '../assets/icon-rock.svg';
import Paper from '../assets/icon-paper.svg';
import Scissor from '../assets/icon-scissors.svg';
import { GlobalContext } from '../context/Context';

export default function DiceField({ onClick }) {
  const {
    getBotDice,
    myDice,
    botDice,
    setWinner,
    winner,
    loading,
  } = useContext(GlobalContext);

  useEffect(() => {
    getBotDice();
    setWinner(myDice, botDice);
  }, []);

  return (
    <div className="dice-field">
      <div
        className={winner === 'me' ? 'my-dice diced winner' : 'my-dice diced'}
      >
        <span>YOU PICKED</span>
        {myDice === 'rock' && (
          <Dice
            gradient1={'hsl(349, 71%, 52%)'}
            gradient2={'hsl(349, 70%, 56%)'}
            icon={Rock}
            customClass={'rock'}
          />
        )}
        {myDice === 'paper' && (
          <Dice
            gradient1={'hsl(230, 89%, 62%)'}
            gradient2={'hsl(230, 89%, 65%)'}
            icon={Paper}
            customClass={'paper'}
          />
        )}
        {myDice === 'scissor' && (
          <Dice
            gradient1={'hsl(39, 89%, 49%)'}
            gradient2={'hsl(40, 84%, 53%)'}
            icon={Scissor}
            customClass={'scissor'}
          />
        )}
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
            {botDice === 'rock' && (
              <Dice
                gradient1={'hsl(349, 71%, 52%)'}
                gradient2={'hsl(349, 70%, 56%)'}
                icon={Rock}
                customClass={'rock'}
              />
            )}
            {botDice === 'paper' && (
              <Dice
                gradient1={'hsl(230, 89%, 62%)'}
                gradient2={'hsl(230, 89%, 65%)'}
                icon={Paper}
                customClass={'paper'}
              />
            )}
            {botDice === 'scissor' && (
              <Dice
                gradient1={'hsl(39, 89%, 49%)'}
                gradient2={'hsl(40, 84%, 53%)'}
                icon={Scissor}
                customClass={'scissor'}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
