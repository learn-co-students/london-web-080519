class Brand < ApplicationRecord
    has_many :cars
    has_many :mechanics, through: :cars
    has_many :owners, through: :cars

    def self.most_popular
        self.all.max_by {|b| b.cars.length}
    end

    def self.least_popular
        self.all.min_by {|b| b.cars.length}
    end
end
