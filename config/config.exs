# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :slider, SliderWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "rOw+fngxQVdOChodpB5ou4sfFBh7HA86SdGuXU7zMC+5Z92FBT0+5yZrzy8zR/MK",
  render_errors: [view: SliderWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Slider.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
