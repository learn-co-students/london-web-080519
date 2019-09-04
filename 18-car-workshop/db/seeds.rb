Car.destroy_all
Brand.destroy_all
Owner.destroy_all
Mechanic.destroy_all
Service.destroy_all

brands = Brand.create [
    { :name => 'audi' },
    { :name => 'vw' },
    { :name => 'fiat' },
    { :name => 'volvo' },
    { :name => 'bmw' },
    { :name => 'vauxhall' },
    { :name => 'jeep' },
    { :name => 'lada' },
    { :name => 'mini' },
    { :name => 'ford' },
    { :name => 'alfa romeo' },
    { :name => 'aston martin' },
    { :name => 'chevrolet' },
    { :name => 'dodge' },
    { :name => 'honda' },
    { :name => 'hyundai' },
    { :name => 'mazda' },
    { :name => 'mercedes' },
    { :name => 'land rover' },
    { :name => 'nissan' },
    { :name => 'tesla' },
    { :name => 'renault' }
]

mechanics = Mechanic.create [
    { :name => 'sam' },
    { :name => 'dan' },
    { :name => 'joe' }
]

owners = Owner.create [
    { :name => 'ian' },
    { :name => 'sarah' },
    { :name => 'jo' },
    { :name => 'lucy' },
    { :name => 'stu' },
    { :name => 'sofia' },
    { :name => 'mani' },
    { :name => 'sergio' },
    { :name => 'charly' },
    { :name => 'gabe' }
]

100.times do 
    Car.create(:owner => owners.sample, :brand => brands.sample)
end

200.times do
    Service.create(car: Car.all.sample, mechanic: mechanics.sample)
end