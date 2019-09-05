class Consumption < ApplicationRecord
  belongs_to :patron
  belongs_to :drink

  validate :patron_is_adult, :patron_is_not_drunk

  def patron_is_adult
    if self.patron.age < 18 && self.drink.units > 0
      errors.add(:"#{self.patron.name}", "is under 18!")
    end
  end

  def patron_is_not_drunk
    if self.patron.age > 18 && self.drink.units > 0 && self.patron.is_drunk?
      errors.add(:"#{self.patron.name}", "is too drunk! please choose a non alchoolic drink")
    end
  end
end
