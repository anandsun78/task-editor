import { defaultState } from "../../../server/defaultState";

export default function commentReducer(comments = defaultState.comments) {
  return comments;
}
