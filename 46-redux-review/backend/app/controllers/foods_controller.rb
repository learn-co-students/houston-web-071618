class FoodsController < ApplicationController
    def create
        food = Food.create(food_params)
        render json: food
    end

    def index
        render json: Food.all
    end
    
    def show
        food = Food.find(params[:id])
        render json: food
    end

    def update
        food = Food.find(params[:id])
        food.update(food_params)
        render json: food
    end

    def destroy
        food = Food.find(params[:id])
        food.destroy
        render json: food
    end

    def food_params
        params.permit( :name, :panda_id )
    end
end
