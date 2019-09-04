class Mechanic < ApplicationRecord
    has_many :services
    has_many :cars, through: :services
    has_many :owners, through: :cars
end
