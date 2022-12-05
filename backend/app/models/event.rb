# frozen_string_literal: true

class Event < ApplicationRecord
    mount_uploader :image, ImageUploader
end