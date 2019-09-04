class Service < ApplicationRecord
  belongs_to :car
  belongs_to :mechanic
end
