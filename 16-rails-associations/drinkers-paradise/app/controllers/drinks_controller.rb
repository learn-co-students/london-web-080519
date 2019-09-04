class DrinksController < ApplicationController
  def show
    @drink = Drink.find params[:id]
  end

  def new
    @drink = Drink.new
  end

  def create
    drink = Drink.create drink_params
    redirect_to drink
  end

  private

  def drink_params
    params.require(:drink).permit(:name, :spirit, :units, :price, :glass_type, :bar_id)
  end
end
