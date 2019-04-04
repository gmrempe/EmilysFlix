class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Password must contain between 4 and 60 characters", "Email must be valid."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["No one is logged in"], status: 422
        end
    end
end