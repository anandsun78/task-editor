import { defaultState } from "../../../server/defaultState";

export default function commentReducer(users = defaultState.users) {
  return users;
}
