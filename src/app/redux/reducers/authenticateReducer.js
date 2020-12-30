import { defaultState } from "../../../server/defaultState";
import * as types from "../actions/actionTypes";

export default function authenticateReducer(
  userSession = defaultState.session || {},
  action
) {
  const { type, authenticated, session } = action;
  switch (type) {
    case types.REQUEST_AUTHENTICATE_USER:
      return { ...userSession, authenticated: types.AUTHENTICATED };
    case types.PROCESSING_AUTHENTICATE_USER:
      return { ...userSession, authenticated };
    default:
      return userSession;
  }
}
