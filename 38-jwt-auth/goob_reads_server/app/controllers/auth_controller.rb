class AuthController < ApplicationController
  skip_before_action :check_authentication, only: [:create]
  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {
        user: user,
        token: encode_token({ user_id: user.id })
      }
    else
      render json: {
        error: "Username or password are incorrect"
      }
    end
  end
end
