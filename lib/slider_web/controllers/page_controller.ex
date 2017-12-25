defmodule SliderWeb.PageController do
  use SliderWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
