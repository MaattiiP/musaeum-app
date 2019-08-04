import { SAVE_USER } from './actionsTypes';

export function saveUser(payload) {
  return {
    type: SAVE_USER,
    payload: payload
  }
}
