import { combineReducers } from "redux";

import museumReducer from "../components/content/museum-display/reducers";
import artifactReducer from "../components/content/artifact-display/reducers";
import headerReducer from "../components/header/reducers";
import userReducer from "../components/user/reducers";

const rootReducer = combineReducers({
  museums: museumReducer,
  artifacts: artifactReducer,
  header: headerReducer,
  user: userReducer
});

export default rootReducer;
