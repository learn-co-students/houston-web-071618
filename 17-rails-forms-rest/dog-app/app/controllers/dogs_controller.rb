class DogsController < ApplicationController
  def index
    @dogs = Dog.all
  end

  def show
    @dog = Dog.find(params[:id])
  end

  def new
    @dog = Dog.new
  end

  def create
    dog = Dog.new(dog_params)

    if dog.valid?
      # create the dog
    else
      # dog.errors.messages
    end

    redirect_to dog
  end

  def edit
    @dog = Dog.find(params[:id])
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
    params.require(:dog).permit(:name, :num_legs, :owner)
  end
end
