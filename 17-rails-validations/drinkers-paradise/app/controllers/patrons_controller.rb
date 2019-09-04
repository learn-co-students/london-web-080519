class PatronsController < ApplicationController

    def new
        @patron = Patron.new
    end
    
    def create
        patron = Patron.create(patron_params)
        if patron.valid?
            redirect_to patron
        else
            flash[:errors] = patron.errors.full_messages
            redirect_to new_patron_path
        end
    end

    def show
        @patron = Patron.find(params[:id])
    end

    private

    def patron_params
        params.require(:patron).permit(:name, :age)
    end
end
