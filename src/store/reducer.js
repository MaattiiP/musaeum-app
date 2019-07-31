import { combineReducers } from 'redux';

import museumsReducer from '../components/content/museum-display/reducers'


const rootReducer = combineReducers({
  museums: museumsReducer
})

export default rootReducer;

