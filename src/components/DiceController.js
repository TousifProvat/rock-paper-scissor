import React from 'react';

// svg
import Controller from '../assets/bg-pentagon.svg';

// components
import Rock from './dice/Rock';
import Paper from './dice/Paper';
import Scissor from './dice/Scissor';
import Lizard from './dice/Lizard';
import Spock from './dice/Spock';

export default function DiceController({ onClick }) {
  return (
    <div className="dice-controller">
      <img src={Controller} alt="controller" className="controller" />
      <Rock onClick={onClick} />
      <Paper onClick={onClick} />
      <Scissor onClick={onClick} />
      <Lizard onClick={onClick} />
      <Spock onClick={onClick} />
    </div>
  );
}
