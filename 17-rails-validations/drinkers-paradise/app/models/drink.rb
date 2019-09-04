class Drink < ApplicationRecord
    belongs_to :bar
    has_many :consumptions
    has_many :patrons, through: :consumptions

    validates :units, :price, numericality: { only_integer: true }
    validates :units, numericality: { greater_than_or_equal_to: 0 }
    validates :price, numericality: { greater_than: 0 }
    validates :glass_type, inclusion: { in: %w(tumbler tall martini short),
        message: "%{value} is not a valid glass type" }

    def option_text
        "#{self.name} at #{self.bar.name}"
    end
end
