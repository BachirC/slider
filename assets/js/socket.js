import { Socket } from "phoenix";
import { MOVE_CARD } from "./constants";
import store from './store/store';

let socket = new Socket("/socket", {params: {token: window.userToken}});

socket.connect()

// Subscribes socket to Phoenix channel
let channel = socket.channel("slider:lobby", {})
// Identifier for the socket
let userToken = window.userToken

// joins Phoenix channel
channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })

// Listens to MOVE_CARD actions sent by the other sockets then dispatches it
channel.on(MOVE_CARD, ({body, token}) => {
  if (token !== userToken) store.dispatch(moveCardDefinition(body.id, body.listId));
})

export default channel;
