import { RESET_INPUT, SET_INPUT_ID, SET_INPUT_TITLE } from '../actionTypes'

export const setInputTitle = title => ({
  type: SET_INPUT_TITLE,
  title
})
export const setInputId = id => ({
  type: SET_INPUT_ID,
  id
})
export const resetInputs = () => ({
  type: RESET_INPUT
})
