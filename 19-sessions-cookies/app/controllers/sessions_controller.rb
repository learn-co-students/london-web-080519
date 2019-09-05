class SessionsController < ApplicationController
  def logout
    session.delete(:user_id)
    session.delete(:score)
    redirect_to root_path
  end
end
