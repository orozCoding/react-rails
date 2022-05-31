class V1::ThingsController < ApplicationController
  def index
    # render json: { things: [
    #   {
    #     name: 'some-thing',
    #     guid: '0000-4444-111'
    #   }
    # ] }.to_json

    render json: { things: [Greeting.all]}.to_json
  end
end
