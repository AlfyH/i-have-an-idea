// src/js/actions/index.js
import { SUBMISSION_LIST } from "../constants/action-types";


export function submissionList() {
  return function(dispatch) {
    return fetch('/entriesget', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(data => {
      dispatch({ type: SUBMISSION_LIST, data });
    });
  }
};
