class Bar < ApplicationRecord
    has_many :drinks
    has_many :patrons, through: :drinks

    def self.most_drinks
        self.all.max_by {|bar| bar.drinks.length }
    end
end
