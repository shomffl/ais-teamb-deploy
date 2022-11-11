# frozen_string_literal: true

class Event < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_one_attached :image
    def image_path
        image.attached? ? url_for(image) : nil
    end
end