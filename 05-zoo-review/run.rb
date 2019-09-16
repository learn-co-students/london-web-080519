require_relative "lib/Animal.rb"
require_relative "lib/Zoo.rb"
require 'pry'


#Test your code here
london_zoo = Zoo.new("London Zoo", "London")
howletts = Zoo.new("Howletts Animal Park", "Canterbury")
shard_zoo = Zoo.new("Zoo In The Shard", "London")
chester_zoo = Zoo.new("Chester Zoo", "Chester")

simba = Animal.new("Lion", "Simba", 30, london_zoo)
rafiki = Animal.new("Baboon", "Rafiki", 20, howletts)
mufasa = Animal.new("Lion", 'Mufasa', 100, shard_zoo)
scar = Animal.new("Lion", "Scar", 90, chester_zoo)
timon = Animal.new("Meerkat", "Timon", 10, london_zoo)
pumba = Animal.new("Warthog", "Pumba", 60, london_zoo)
zazu = Animal.new("Toucan", "Zazu", 10, howletts)
nala = Animal.new("Lion", "Nala", 25, chester_zoo)


binding.pry
puts "done"
