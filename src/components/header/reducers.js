import {ARTIFACTS_VIEW} from './actionsTypes';
import {MUSEUMS_VIEW} from './actionsTypes';
import {LOGIN_VIEW} from './actionsTypes';

const initialState = {
  activeView: 'museum'
}

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case ARTIFACTS_VIEW:
      return {activeView: 'artifact'}
    case MUSEUMS_VIEW:
      return {activeView: 'museum'}
    case LOGIN_VIEW:
      return {activeView: 'login'}
    default:
      return state
  }
}

export default headerReducer;
