class Pet < Animal

  @@all = []

  attr_reader :name
  attr_accessor :mood

  def initialize(name)

    binding.pry

    @name = name
    @mood = 'nervous'
    @@all << self
  end

  def die
    puts "dead!"
  end

end