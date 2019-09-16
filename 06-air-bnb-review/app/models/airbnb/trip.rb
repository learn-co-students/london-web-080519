class Trip

  attr_reader :name, :listing, :guest
  
  @@all = []


  def initialize(name, guest, listing)
    @name = name
    @listing = listing
    @guest = guest
    @@all << self
  end


  def self.all
    @@all  
  end

 

end
