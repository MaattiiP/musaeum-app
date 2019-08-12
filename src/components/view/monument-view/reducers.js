import { GET_MONUMENTS } from "./actionsTypes";

const initialState = {
  monumentsList: []
};

export default function monumentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MONUMENTS:
      let monumentsList = action.monument;
      return {
        monumentsList: monumentsList
      };
    default:
      return state;
  }
}
