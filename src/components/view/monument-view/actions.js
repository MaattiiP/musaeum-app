import { GET_MONUMENTS } from "./actionsTypes";

export function saveMonuments(payload) {
  return {
    type: GET_MONUMENTS,
    monument: payload
  };
}
