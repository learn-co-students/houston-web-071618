class DogsController < ApplicationController
  before_action :current_dog, only: [:show, :edit]

  def index
    @dogs = Dog.all
  end

  def show
    
  end

  def new
    @dog = Dog.new
  end

  def create
    dog = Dog.create(dog_params)

    # if dog.valid?
    #   # create the dog
    # else
    #   # dog.errors.messages
    # end

    redirect_to dog
  end

  def edit
    
  end

  def update
    dog = Dog.find(params[:id])

    dog.update(dog_params)

    redirect_to dog
  end

  def destroy
    dog = Dog.find(params[:id])

    dog.destroy

    redirect_to dogs_path
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :num_legs, :owner_id)
  end

  def current_dog
    @dog = Dog.find(params[:id])
  end
end
