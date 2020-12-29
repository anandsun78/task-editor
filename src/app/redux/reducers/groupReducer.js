import { defaultState } from "../../../server/defaultState";

export default function commentReducer(groups = defaultState.groups) {
  return groups;
}
