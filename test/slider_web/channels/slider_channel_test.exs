defmodule SliderWeb.SliderChannelTest do
  @endpoint SliderWeb.Endpoint
  alias SliderWeb.UserSocket

  import Phoenix.Socket, only: [assign: 3]
  use SliderWeb.ChannelCase

  setup do
    {:ok, socket} = connect(UserSocket, %{})
    token = "TOKEN"
    socket = assign(socket, :user_token, token)
    {:ok, _, socket} = subscribe_and_join(socket, "slider:lobby", %{})
    {:ok, %{socket: socket, token: token}}
  end

  test "it broadcasts message MOVE_CARD from socket", %{socket: socket, token: token} do
    push socket, "MOVE_CARD", %{"body" => "body", "token" => token}
    assert_broadcast "MOVE_CARD", %{body: "body", token: token}
  end

  test "it doesn't broadacast unknown actions", %{socket: socket} do
    push socket, "UNKNOWN_ACTION", %{"body" => "body"}
    refute_broadcast "MOVE_CARD", _
  end
end
