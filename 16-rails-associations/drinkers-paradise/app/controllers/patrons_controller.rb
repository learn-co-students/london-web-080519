class PatronsController < ApplicationController

    def new
        @patron = Patron.new
    end
    
    def create
        patron = Patron.create(patron_params)
        redirect_to patron
    end

    def show
        @patron = Patron.find(params[:id])
    end

    private

    def patron_params
        params.require(:patron).permit(:name, :age)
    end
end
