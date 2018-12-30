import { combineReducers } from 'redux';
// import { reducer as formRedcer } from 'redux-form';

const appReducer = combineReducers({
  auth: () => ({ isLoggedIn: false }),
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
}

export default rootReducer;