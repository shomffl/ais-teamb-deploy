# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :events
      get 'api/v1/events/new' => 'events#new'
      get 'api/v1/events/edit' => 'events#edit'
    end
  end
end
