class Flight
  attr_reader :airline

  def initialize(airline, origin, destination)
    @airline = airline
    @origin = origin
    @destination = destination
  end


  #returns an array of the tickets for this flight
  def tickets
    Ticket.all.select do |ticket|
      ticket.flight == self
    end
  end

  #returns an array of passengers ticketed on this flight
  def passengers
    tickets.map do |ticket|
      ticket.passenger
    end
  end

  #an array of passenger names for this flight
  def passenger_manifest
    #find the tickets for this flight
    #find the passengers on those tickets
    #find the names on those passengers
    #return 'em

    passengers.map do |passenger|
      passenger.name
    end

  end

end