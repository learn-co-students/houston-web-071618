class CatsController < ApplicationController
  # GET /cats
  def index
    # display all cats
    cats = Cat.all
    render json: cats
  end

  # GET /cats/:id
  def show
    # display one cat
    cat = Cat.find(params[:id])
    render json: cat
  end

  # POST /cats
  def create
    cat = Cat.new(cat_params)

    if cat.valid?
      cat.save
      render json: cat
    else
      render json: cat.errors
    end
  end

  private

  def cat_params
    params.require(:cat).permit(:name, :age, :wears_hat)
  end
end
