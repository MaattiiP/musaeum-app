import { GET_MUSEUMS } from "./actionsTypes";

const initialState = {
  museumsList: []
};

function museumReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSEUMS:
      let museumsList = action.museums;
      return {
        museumsList: museumsList
      };
    default:
      return state;
  }
}

export default museumReducer;
