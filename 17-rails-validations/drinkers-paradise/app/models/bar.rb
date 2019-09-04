class Bar < ApplicationRecord
    has_many :drinks
    has_many :patrons, through: :drinks

    validates :name, presence: true
    validates :name, length: { minimum: 2 }
    validates :location, presence: true
    validates :name, uniqueness: { scope: :location,
        message: ": %{value} already exists at this location" }

    def self.most_drinks
        self.all.max_by {|bar| bar.drinks.length }
    end
end
