// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'GET_MY_DICE':
      return {
        ...state,
        myDice: action.payload,
      };
    case 'GET_BOT_DICE':
      return {
        ...state,
        botDice: action.payload,
      };
    case 'WINNER':
      return {
        ...state,
        winner: action.payload,
      };
    case 'LOSE_POINT':
      return {
        ...state,
        score: state.score - 1,
      };
    case 'WIN_POINT':
      return {
        ...state,
        score: state.score + 1,
      };
    case 'MODAL':
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};
