class Owner < ApplicationRecord
    has_many :cars
    # has_many :mechanics, through: :cars
    validates :name, uniqueness: true
end
