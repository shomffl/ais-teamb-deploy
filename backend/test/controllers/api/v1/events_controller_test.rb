require "test_helper"

class Api::V1::EventsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_events_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_events_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_v1_events_edit_url
    assert_response :success
  end
end