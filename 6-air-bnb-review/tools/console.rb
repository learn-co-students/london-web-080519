require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# # Write these in  order of dependence - starting with the least dependent first!

# bakery1 = Bakery.new("Yummmz")
# bakery2 = Bakery.new("Groggs")

# # store an instance in memory with the reference of cake, 
# # make a new dessert called cake, that references the object stored as bakery1
# cake = Dessert.new("Cake", bakery1)

# crumble = Dessert.new("Apple Crumble", bakery2)
# pancake = Dessert.new("Pancakes", bakery1)
# waffles = Dessert.new("Waffles", bakery2)


# chocolate = Ingredient.new("Chocolate", cake, 200)
# flour = Ingredient.new("Flour", pancake, 20)
# butter = Ingredient.new("Butter", cake, 500)
# sugar = Ingredient.new("Sugar", cake, 350)
# caster = Ingredient.new("Caster sugar", cake, 350)
# brown_sug = Ingredient.new("Brown sugar", cake, 350)
# apple = Ingredient.new("Apple", crumble, 250)
# almond_milk = Ingredient.new("Almond Milk", pancake, 100)
# banana = Ingredient.new("Banana", waffles, 110)

listing1 = Listing.new("London")
listing2 = Listing.new("Tokyo")
listing3 = Listing.new("Montreal")
listing4 = Listing.new("London")



charl = Guest.new("Charl")
hunter = Guest.new("Hunter")
hoots = Guest.new("Hoots")
silvie = Guest.new("Silvie")

trip1 = Trip.new("holiday", silvie, listing1)
trip2 = Trip.new("business", hoots, listing2)
trip3 = Trip.new("fun", charl, listing3)
trip4 = Trip.new("staycation", hunter, listing4)
trip5 = Trip.new("funsies", charl, listing4)



Pry.start




0
