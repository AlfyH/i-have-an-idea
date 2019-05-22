import {  SUBMISSION_LIST } from "../constants/action-types";

const initialState = {
  remoteArticles: []
};

function rootReducer(state = initialState, action) {

  if (action.type === SUBMISSION_LIST) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.data)
    });
  }
  return state;
}

export default rootReducer;
