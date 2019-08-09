import { GET_MUSEUMS } from "./actionsTypes";

export function saveMuseums(payload) {
  return {
    type: GET_MUSEUMS,
    payload: payload
  };
}
