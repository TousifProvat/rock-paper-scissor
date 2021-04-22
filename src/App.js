import React, { useState, useContext } from 'react';

// scss
import './App.scss';

// Components
import Scoreboard from './components/Scoreboard';
import DiceController from './components/DiceController';
import DiceField from './components/DiceField';
import Rules from './components/Rules';
import { GlobalContext } from './context/Context';

function App() {
  const { getMyDice, getBotDice } = useContext(GlobalContext);

  let [start, setStart] = useState(false);
  let [modal, setModal] = useState(true);

  // when I click a dice
  const onClick = (item) => {
    setStart((start = !start));
    getMyDice(item);
    getBotDice();
  };

  const modalActive = () => {
    setModal((modal = !modal));
  };

  return (
    <div className="container">
      <div className={modal ? 'overlay active' : 'overlay'}></div>
      <Scoreboard />
      {!start ? (
        <DiceController onClick={onClick} />
      ) : (
        <DiceField onClick={onClick} />
      )}
      {modal ? <Rules onClick={modalActive} /> : ''}
      <div className="show-rules" onClick={modalActive}>
        RULES
      </div>
    </div>
  );
}

export default App;
