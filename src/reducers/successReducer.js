import { actionTypes } from "../actions";
const { CORRECT_GUESS } = actionTypes;

export default (state = false, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
