import * as types from "../actions/actionTypes";

export default function groupReducer(groups = [], action) {
  switch (action.type) {
    case types.SET_STATE:
      return action.state.groups;
    default:
      return groups;
  }
}
