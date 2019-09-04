class RemoveMechanicFromCars < ActiveRecord::Migration[6.0]
  def change
    remove_reference :cars, :mechanic, null: false, foreign_key: true
  end
end
