# frozen_string_literal: true

module Api
  module V1
    class EventsController < ApplicationController
      def index
        events = Event.order(created_at: :desc)
        render json: { status: 'SUCCESS', message: 'send back all events', data: events }
      end

      def show
        event = Event.find(params[:id])
        render json: { status: 'SUCCESS', message: 'send back event', data: event }
      end

      def edit; end
    end
  end
end
