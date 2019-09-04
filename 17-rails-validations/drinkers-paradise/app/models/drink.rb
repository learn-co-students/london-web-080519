class Drink < ApplicationRecord
    belongs_to :bar
    has_many :consumptions
    has_many :patrons, through: :consumptions

    def option_text
        "#{self.name} at #{self.bar.name}"
    end
end
