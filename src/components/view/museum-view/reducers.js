import { GET_MUSEUMS } from "./actionsTypes";

const initialState = {
    museums: []
};

function museumReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSEUMS:
      return {
        museums: action.payload
      };
    default:
      return state;
  }
}

export default museumReducer;
