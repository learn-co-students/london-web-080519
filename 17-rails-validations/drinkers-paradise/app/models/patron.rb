class Patron < ApplicationRecord
    has_many :consumptions
    has_many :drinks, through: :consumptions

    def units_consumed
        self.drinks.reduce(0){ |total, drink| total + drink.units } 
    end

    def is_drunk?
        self.units_consumed > Patron.drunk_limit 
    end

    def self.drunk_limit
        10
    end
end
