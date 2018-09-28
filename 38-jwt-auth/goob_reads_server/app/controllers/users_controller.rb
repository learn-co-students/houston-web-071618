class UsersController < ApplicationController
  skip_before_action :check_authentication, only: [:create]

  def create
    user = User.create(user_params)
    render json: {
      user: user,
      token: encode_token({ user_id: user.id })
    }
  end

  def profile
    render json: current_user
  end

  private

  def user_params
    params.permit(:username, :bio, :password)
  end
end
