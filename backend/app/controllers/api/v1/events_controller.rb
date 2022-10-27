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

      def create
        event = Event.new(event_params)
        if event.save
          render json: { status: 'SUCCESS', data: event }
        else
          render json: { status: 'ERROR', data: event.errors }
        end
      end

      def new 
        event = Event.new
      end

      def edit 
        event = Event.find(params[:id])
        render json: { status: 'SUCCESS', message: 'send back event', data: event }
      end

      def update
        event = Event.find(params[:id])
        if event.update(event_params)
          render json: { status: 'SUCCESS', data: event }
        else
          render json: { status: 'ERROR', data: event.errors }
        end
      end

      def destroy
        event = Event.find(params[:id])
        if event.destroy
          render json: { status: 'SUCCESS', message: 'Delete the event', data: event }
        else
          render json: { status: 'ERROR', data: event.errors }
        end
      end

      private
      def event_params
        params.require(:event).permit(:name, :detail, :image_path)
      end
    end
  end
end
