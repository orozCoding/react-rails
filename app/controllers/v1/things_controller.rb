module V1
  class ThingsController < ApplicationController
    def index
      # render json: { things:
      #   {
      #     name: 'some-thing',
      #     guid: '0000-4444-111'
      #   }
      # ] }.to_json
      puts Greeting.all

      render json: { things: Greeting.all }.to_json
    end
  end
end
