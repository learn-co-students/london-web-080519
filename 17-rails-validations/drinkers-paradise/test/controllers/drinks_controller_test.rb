require 'test_helper'

class DrinksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get drinks_show_url
    assert_response :success
  end

  test "should get new" do
    get drinks_new_url
    assert_response :success
  end

  test "should get create" do
    get drinks_create_url
    assert_response :success
  end

end
