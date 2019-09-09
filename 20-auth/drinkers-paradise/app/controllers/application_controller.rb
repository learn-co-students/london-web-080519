class ApplicationController < ActionController::Base

    before_action :set_current_user

    helper_method :logged_in?

    def set_current_user
        @current_user = session[:user_id] ? User.find(session[:user_id]) : nil
    end

    def logged_in?
        !!@current_user
    end

    def authorize_user
        if !logged_in?
            flash[:notices] = ["You must be logged in to view that page"]
            redirect_to bars_path
        end
    end
end
