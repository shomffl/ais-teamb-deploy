# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class EventsControllerTest < ActionDispatch::IntegrationTest
      test 'should get index' do
        get api_v1_events_index_url
        assert_response :success
      end

      test 'should get show' do
        get api_v1_events_show_url
        assert_response :success
      end

      test 'should get edit' do
        get api_v1_events_edit_url
        assert_response :success
      end
    end
  end
end
