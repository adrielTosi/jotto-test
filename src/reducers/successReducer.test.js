import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";

test("default initial state is false", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true when passed action type of CORRECT_GUESS", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBeTruthy();
});
