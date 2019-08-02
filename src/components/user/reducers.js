import { SAVE_USER } from './actionsTypes';

const initialState = {
  token: "",
  userData: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return {
        token: action.payload.token,
        userData: action.payload.user
      }
    default:
      return state
  }
}

export default userReducer;
