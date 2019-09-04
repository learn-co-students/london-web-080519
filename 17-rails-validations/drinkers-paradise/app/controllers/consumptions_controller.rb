class ConsumptionsController < ApplicationController

    def new
        @consumption = Consumption.new
        @patron = params[:patron_id] ? Patron.find(params[:patron_id]) : nil
    end

    def create
        consumption = Consumption.create consumption_params
        redirect_to consumption.patron
    end

    private

    def consumption_params
        params.require(:consumption).permit(:patron_id, :drink_id)
    end
end
