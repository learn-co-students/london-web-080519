class DogsController < ApplicationController
  def index
    @dogs = Dog.all
  end

  def show
    @dog = Dog.find(params[:id])
  end

  def adoption_dogs
    @dogs = Dog.all.select{|dog| dog.employees.count == 0}
  end

  def adoption_form
    @dog = Dog.find(params[:id])
  end

  def adopt_dog
        @dog = Dog.find(params[:dog_id])
        @employee = Employee.find(params[:employee_id])
        @employee.dog = @dog
        @employee.save
    redirect_to dog_path(@dog)
  end
end
