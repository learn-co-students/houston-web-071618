require_relative 'pet'

class Cat < Pet

  @@all = []

  def initialize(name)
    @num_lives = 9
    # @@all << "potato"
    super(name.upcase)
  end


  def die
    @num_lives -= 1
    super
  end

end
