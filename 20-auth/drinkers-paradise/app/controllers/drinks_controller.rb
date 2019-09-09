class DrinksController < ApplicationController
  before_action :authorize_user, only: [:new, :create]
  def show
    @drink = Drink.find params[:id]
  end

  def new
    @drink = Drink.new
  end

  def create
    drink = Drink.create drink_params
    if drink.valid?
      redirect_to drink
    else
      flash[:errors] = drink.errors.full_messages
      redirect_to new_drink_path
    end
  end

  private

  def drink_params
    params.require(:drink).permit(:name, :spirit, :units, :price, :glass_type, :bar_id)
  end
end
