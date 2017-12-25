import { MOVE_CARD } from "../constants.js";

export function moveCard(id) {
  return dispatch => {
    dispatch(moveCardDefinition(id));
  }
}

function moveCardDefinition(id) {
  return {
    type: MOVE_CARD,
    id: id
  }
}
