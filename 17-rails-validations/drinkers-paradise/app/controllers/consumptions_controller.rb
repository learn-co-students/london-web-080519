class ConsumptionsController < ApplicationController

    def new
        @consumption = Consumption.new
        @patron = params[:patron_id] ? Patron.find(params[:patron_id]) : nil
    end

    def create
        consumption = Consumption.create consumption_params
        if consumption.valid?
            flash[:notices] = ["cheers!"]
            redirect_to consumption.patron
        else
            flash[:errors] = consumption.errors.full_messages
            redirect_to new_consumption_path
        end
    end

    private

    def consumption_params
        params.require(:consumption).permit(:patron_id, :drink_id)
    end
end
