defmodule SliderWeb.Router do
  use SliderWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :put_user_token
  end

  defp put_user_token(conn, _) do
    identifier_length = 32
    identifier = identifier_length
                 |> :crypto.strong_rand_bytes()
                 |> Base.encode64()
                 |> binary_part(0, identifier_length)
                 IO.puts "in pipe, identifier = #{identifier}"
    assign(conn, :user_token, identifier)
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SliderWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", SliderWeb do
  #   pipe_through :api
  # end
end
