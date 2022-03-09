import { Action } from "../actions";
import { ActionTypes } from "../action-types";

const initialstate = 0;

const reducer = (state: number = initialstate, action: Action) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return state + action.payload;
    case ActionTypes.WITHDRAW:
      return state - action.payload;
    case ActionTypes.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
