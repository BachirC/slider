defmodule SliderWeb.SliderChannelTest do
  @endpoint SliderWeb.Endpoint
  alias SliderWeb.UserSocket

  import Phoenix.Socket, only: [assign: 3]
  use SliderWeb.ChannelCase

  test "it broadcasts message MOVE_CARD from socket" do
    {:ok, socket} = connect(UserSocket, %{})
    token = "TOKEN"
    socket = assign(socket, :user_token, token)
    {:ok, _, socket} = subscribe_and_join(socket, "slider:lobby", %{})

    push socket, "MOVE_CARD", %{"body" => "body", "token" => token}
    assert_broadcast "MOVE_CARD", %{body: "body", token: token}
  end
end
