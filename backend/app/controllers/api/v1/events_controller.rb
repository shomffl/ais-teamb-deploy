class Api::V1::EventsController < ApplicationController
    def index
      # indexでは全てのイベントを返却したい
      @events = Event.all
      render :json => @events
    end
  
    def edit
    end
  
    def show
    end
  end