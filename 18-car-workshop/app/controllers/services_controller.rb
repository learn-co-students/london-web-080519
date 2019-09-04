class ServicesController < ApplicationController

    def create
        service = Service.create(service_params)
        if service.valid?
            redirect_to cars_path
        else
            flash[:errors] = service.errors.full_messages
            redirect_to cars_path
        end
    end

    private

    def service_params
        params.require(:service).permit(:mechanic_id, :car_id)
    end
end
