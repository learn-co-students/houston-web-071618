class UsersController < ApplicationController

  before_action :define_users
  before_action :define_user


  def create
    user = User.new(user_params)
    if user.valid?
      user.save
      redirect_to user
    else
      # TODO: Handle user error
    end
  end

  def update
    user = User.find(params[:id])
    user.assign_attributes(user_params)
    if user.valid?
      user.save
      redirect_to user
    else
      # TODO: Handle user error
    end
  end

  def user_params
    params.require(:user).permit(:name)
  end

  def show
  end

  def edit
  end

  def new
  end

  def index 
  end

  private
  def define_users
    @users = User.all
  end

  def define_user
    unless(params[:id] == nil)
      @user = User.find(params[:id])
    else
      @user = User.new
    end
  end

end
