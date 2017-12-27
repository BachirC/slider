defmodule SliderWeb.SliderChannel do
  use Phoenix.Channel

  def join("slider:lobby", _message, socket) do
    {:ok, socket}
  end
  def join("slider:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  # Broadcasts MOVE_CARD action to connected sockets
  def handle_in("MOVE_CARD", %{"body" => body, "token" => token}, socket) do
    broadcast! socket, "MOVE_CARD", %{token: token, body: body}
    {:noreply, socket}
  end
  # ignore all other messages
  def handle_in(_, _, socket) do
    {:noreply, socket}
  end
end
