class Car < ApplicationRecord
  has_many :services
  has_many :mechanics, through: :services
  belongs_to :owner
  belongs_to :brand

  def services_by(mechanic)
    self.services.where(mechanic_id: mechanic.id)
  end

  def usual_mechanic
    self.mechanics.max_by{|mechanic| self.services_by(mechanic).length }
  end
end
