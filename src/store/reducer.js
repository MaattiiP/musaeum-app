import { combineReducers } from 'redux';

import museumsReducer from '../components/content/reducers'


const rootReducer = combineReducers({
  museums: museumsReducer
})

export default rootReducer;

