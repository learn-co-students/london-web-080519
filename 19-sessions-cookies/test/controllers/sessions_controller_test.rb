require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get logout" do
    get sessions_logout_url
    assert_response :success
  end

end
