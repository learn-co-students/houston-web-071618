class RappersController < ApplicationController
  def index
    @rappers = Rapper.all
  end
end
