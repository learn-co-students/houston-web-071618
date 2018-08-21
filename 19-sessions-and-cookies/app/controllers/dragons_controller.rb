class DragonsController < ApplicationController

  before_action :define_users
  before_action :define_abilities
  before_action :define_dragons
  before_action :define_dragon

  def create
    dragon = Dragon.new(dragon_params)
    dragon.user = @logged_in_user
    if dragon.valid?
      dragon.save
      redirect_to dragon
    else
      flash[:error_message] = dragon.errors.full_messages.join(', ')
      redirect_to new_dragon_path
    end
  end

  def update
    dragon = Dragon.find(params[:id])
    dragon.assign_attributes(dragon_params)
    if dragon.valid?
      dragon.save
      redirect_to dragon
    else
      # TODO: Handle user error
    end
  end

  def dragon_params
    params.require(:dragon).permit(:name, :user_id, ability_ids: [])
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

  def define_abilities
    @abilities = Ability.all
  end

  def define_dragons
    @dragons = Dragon.all
  end

  def define_dragon
    unless(params[:id] == nil)
      @dragon = Dragon.find(params[:id])
    else
      @dragon = Dragon.new
    end
  end

end
