class PokemonsController < ApplicationController

  def create
    name = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    @pokemon = Pokemon.create(nickname: name, species: species, trainer_id: params[:trainer_id].to_i)
    render json: @pokemon
  end

  def destroy
    @pokemon = Pokemon.find(params[:id])
    Pokemon.destroy(params[:id])
    render json: @pokemon
  end

  # private
  #
  # def pokemon_params
  #   params.permit(:trainer_id)
  # end

end
