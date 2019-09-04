class BarsController < ApplicationController

  before_action :find_bar, only: [:show, :edit, :update, :destroy]

  def index
    @bars = Bar.all
  end

  def show
  end

  def new
    @bar = Bar.new
  end

  def create
    bar = Bar.create(bar_params)
    redirect_to bar
  end

  def edit
  end

  def update
    @bar.update(bar_params)
    redirect_to @bar
  end

  def destroy
    @bar.destroy
    redirect_to bars_path
  end

  private

  def find_bar
    @bar = Bar.find params[:id]
  end

  def bar_params
    params.require(:bar).permit(:name, :location)
  end
end
