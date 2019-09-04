class CarsController < ApplicationController
    def index
        @cars = Car.all
        @service = Service.new
    end

    def new
        @car = Car.new
    end

    def create
        car = Car.create(car_params)
        redirect_to car.owner
    end

    private

    def car_params
        params.require(:car).permit(:owner_id, :brand_id, :mechanic_id)
    end
end
