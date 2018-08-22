class SessionsController < ApplicationController
  def new
  end

  def create
    # find the user with that username
    user = User.find_by(username: params[:username])

    # check if password is legit
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to users_path
    else
      flash[:error] = "YOU ARE NOT ALLOWED."
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
