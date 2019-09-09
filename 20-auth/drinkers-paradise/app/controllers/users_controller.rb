class UsersController < ApplicationController

    def new
        @user = User.new
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            redirect_to bars_path
        else
            flash[:errors] = user.errors.full_messages
            redirect_to new_user_path
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
