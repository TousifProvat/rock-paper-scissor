import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducer';

const initialState = {
  myDice: '',
  botDice: '',
  loading: true,
  score: 0,
  winner: '',
};

// creat context
export const GlobalContext = createContext(initialState);

// Provider
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  const getMyDice = (dice) => {
    dispatch({
      type: 'GET_MY_DICE',
      payload: dice,
    });
  };

  const getBotDice = () => {
    const dices = ['rock', 'paper', 'scissor'];
    const number = Math.floor(Math.random() * dices.length);
    dispatch({
      type: 'LOADING',
      payload: true,
    });

    dispatch({
      type: 'GET_BOT_DICE',
      payload: dices[number],
    });

    setInterval(() => dispatch({ type: 'LOADING', payload: false }), 1000);
  };

  const winner = () => {
    dispatch({
      type: 'WINNER',
      payload: 'me',
    });
    dispatch({
      type: 'WIN_POINT',
    });
  };

  const loser = () => {
    dispatch({
      type: 'WINNER',
      payload: 'bot',
    });
    dispatch({
      type: 'LOSE_POINT',
    });
  };

  const draw = () => {
    dispatch({ type: 'WINNER', payload: 'none' });
  };

  const setWinner = (mydice, botdice) => {
    if (mydice === 'rock' && botdice === 'scissor') {
      winner();
    } else if (mydice === 'paper' && botdice === 'rock') {
      winner();
    } else if (mydice === 'scissor' && botdice === 'paper') {
      winner();
    } else if (mydice === botdice) {
      draw();
    } else {
      loser();
    }
  };

  // const setModal = (bool) => {
  //   dispatch({
  //     type: 'MODAL',
  //     payload: bool,
  //   });
  // };

  return (
    <GlobalContext.Provider
      value={{
        myDice: state.myDice,
        botDice: state.botDice,
        loading: state.loading,
        score: state.score,
        winner: state.winner,
        getMyDice,
        getBotDice,
        setWinner,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
