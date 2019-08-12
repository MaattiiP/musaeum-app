import { MUSEUMS_VIEW, ARTIFACTS_VIEW, MONUMENT_VIEW } from "./actionsTypes";

const initialState = {
  activeView: "museum"
};

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case ARTIFACTS_VIEW:
      return { activeView: "artifact" };
    case MUSEUMS_VIEW:
      return { activeView: "museum" };
    case MONUMENT_VIEW:
      return { activeView: "monument" };
    default:
      return state;
  }
}

export default headerReducer;
