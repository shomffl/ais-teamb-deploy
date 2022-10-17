class Api::V1::EventsController < ApplicationController
  def index
    events = Event.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'send back all events', data: events }
  end

  def show
  end

  def edit
  end
end
