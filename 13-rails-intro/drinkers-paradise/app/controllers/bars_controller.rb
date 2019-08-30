class BarsController < ApplicationController
  def index
    @bars = Bar.all
  end

  def show
    @bar = Bar.find params[:id]
  end

  def new
  end

  def create
  end
end
