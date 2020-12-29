import { defaultState } from "../../../server/defaultState";

export default function groupReducer(groups = defaultState.groups) {
  return groups;
}
