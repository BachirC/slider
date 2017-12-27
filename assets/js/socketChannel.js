import { Socket } from "phoenix";
import { MOVE_CARD } from "./constants";
import store from './store/store';

let socket = new Socket("/socket");

socket.connect()

// Subscribes socket to Phoenix channel
const channel = socket.channel("slider:lobby", {})
// Identifier for the socket (Created in put_user_token in slider_web/router.ex, passed to client
// through app.html.eex)
const userToken = window.userToken

// joins Phoenix channel
channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })

export { channel, userToken };
