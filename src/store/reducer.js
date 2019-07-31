import { combineReducers } from 'redux';

import museumReducer from '../components/content/museum-display/reducers';
import artifactReducer from '../components/content/artifact-display/reducers';


const rootReducer = combineReducers({
  museums: museumReducer,
  artifacts : artifactReducer
})

export default rootReducer;

