class AbilitiesController < ApplicationController

  before_action :define_abilities
  before_action :define_ability


  def create
    ability = Ability.new(ability_params)
    if ability.valid?
      ability.save
      redirect_to user
    else
      # TODO: Handle user error
    end
  end

  def update
    ability = Ability.find(params[:id])
    ability.assign_attributes(ability_params)
    if ability.valid?
      ability.save
      redirect_to user
    else
      # TODO: Handle user error
    end
  end

  def ability_params
    params.require(:ability).permit(:name, :dragon_ids)
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
  def define_abilities
    @abilities = Ability.all
  end

  def define_ability
    unless(params[:id] == nil)
      @ability = Ability.find(params[:id])
    else
      @user = User.new
    end
  end

end
