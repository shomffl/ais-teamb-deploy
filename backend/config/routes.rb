# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    namespace :v1 do
      resources :events
      get 'api/v1/events/new' => 'events#new'
      get 'api/v1/events/:id/edit' => 'events#edit'
    end
  end
end
