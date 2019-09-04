class OwnersController < ApplicationController

    def new
        @owner = Owner.new
    end

    def create
        owner = Owner.create(owner_params)
        if owner.valid?
            redirect_to owner
        else
            flash[:errors] = owner.errors.full_messages
            redirect_to new_owner_path
        end
    end

    def show
        @owner = Owner.find(params[:id])
    end

    private

    def owner_params
        params.require(:owner).permit(:name)
    end
end
