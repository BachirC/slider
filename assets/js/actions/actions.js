import { MOVE_CARD } from "../constants";
import store from '../store/store';

export function moveCard(id, listId) {
  store.dispatch(moveCardDefinition(id, listId));
}

function moveCardDefinition(id, listId) {
  return {
    type: MOVE_CARD,
    id: id,
    listId: listId
  }
}
