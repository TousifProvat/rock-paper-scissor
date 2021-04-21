import React from 'react';
import Controller from '../assets/bg-triangle.svg';
import Dice from './dice/Dice';

// icon

import Rock from '../assets/icon-rock.svg';
import Paper from '../assets/icon-paper.svg';
import Scissor from '../assets/icon-scissors.svg';

export default function DiceController({ onClick }) {
  return (
    <div className="dice-controller">
      <img src={Controller} alt="controller" className="controller" />
      <Dice
        gradient1={'hsl(349, 71%, 52%)'}
        gradient2={'hsl(349, 70%, 56%)'}
        icon={Rock}
        customClass={'rock'}
        onClick={onClick}
      />
      <Dice
        gradient1={'hsl(230, 89%, 62%)'}
        gradient2={'hsl(230, 89%, 65%)'}
        icon={Paper}
        customClass={'paper'}
        onClick={onClick}
      />
      <Dice
        gradient1={'hsl(39, 89%, 49%)'}
        gradient2={'hsl(40, 84%, 53%)'}
        icon={Scissor}
        customClass={'scissor'}
        onClick={onClick}
      />
    </div>
  );
}
