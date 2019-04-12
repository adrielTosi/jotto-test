import {correctGuess, actionTypes} from './index'

const { CORRECT_GUESS } = actionTypes
describe("correctGuess", () => {
  test("returns an action with type CORRECT_GUESS", () => {
    const action = correctGuess()
    expect(action).toEqual({type: CORRECT_GUESS})
  })
})