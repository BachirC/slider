import { MOVE_CARD } from "../constants";
import store from '../store/store';
import { channel, userToken } from '../socketChannel.js';

// Action creator when dropping a card. Sends also a message on the server channel to
// alert other connected clients
export function moveCard(id, listId) {
  store.dispatch(moveCardDefinition(id, listId));

  let payload = {
    token: userToken,
    body: {id: id, listId: listId}
  }

  channel.push(MOVE_CARD, payload)
}

// MOVE_CARD action definition
function moveCardDefinition(id, listId) {
  return {
    type: MOVE_CARD,
    id: id,
    listId: listId
  }
}

// Listens to MOVE_CARD actions sent by the other sockets then dispatches it
channel.on(MOVE_CARD, ({body, token}) => {
  if (token !== userToken) store.dispatch(moveCardDefinition(body.id, body.listId));
})
