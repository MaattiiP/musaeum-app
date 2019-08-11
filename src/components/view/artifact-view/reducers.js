import { GET_ARTIFACTS } from "./actionsTypes";

const initialState = {
  artifactsList: []
};

function museumsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTIFACTS:
      let artifactsList = action.artifact;
      return {
        artifactsList: artifactsList
      };
    default:
      return state;
  }
}

export default museumsReducer;
