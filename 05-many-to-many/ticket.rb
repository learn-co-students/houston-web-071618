class Ticket

  @@all = []

  attr_reader :flight, :passenger

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight
    @passenger_changes = 0

    @@all << self
  end

  def self.all
    @@all
  end


  def change_passenger(new_passenger_instance)
    charge_insane_fee
    self.passenger = new_passenger_instance
  end

  private

  def passenger=(new_passenger)
    @passenger_changes += 1
    @passenger = new_passenger
  end


  def charge_insane_fee
    "$$$$$$$ --"
  end

end