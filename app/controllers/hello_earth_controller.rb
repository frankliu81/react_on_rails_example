# frozen_string_literal: true

class HelloEarthController < ApplicationController
  layout "hello_earth"

  def index
    @hello_earth_props = { name: "Stranger" }
  end
end
