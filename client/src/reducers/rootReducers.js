import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
  auth: () => ({ isLoggedIn: false }),
  form: formReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
}

export default rootReducer;