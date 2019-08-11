import { combineReducers } from "redux";

import museumReducer from "../components/view/museum-view/reducers";
import artifactReducer from "../components/view/artifact-view/reducers";
import headerReducer from "../components/header/reducers";
import userReducer from "../components/header/user-module/reducers";

const rootReducer = combineReducers({
  museums: museumReducer,
  artifacts: artifactReducer,
  header: headerReducer,
  user: userReducer
});

export default rootReducer;
