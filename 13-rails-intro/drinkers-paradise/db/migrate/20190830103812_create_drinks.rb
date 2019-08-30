class CreateDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :spirit
      t.integer :units
      t.float :price
      t.string :glass_type
      t.references :bar, null: false, foreign_key: true
    end
  end
end
