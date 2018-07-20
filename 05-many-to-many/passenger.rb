class Passenger

  attr_reader :name
  
  def initialize(name)
    @name = name
  end


  def tickets
    #figure out which tickets belong to this passenger
    Ticket.all.select do |ticket|
      ticket.passenger == self
    end
  end

  def flights
    # tickees = Ticket.all.select do |ticket|
    #   ticket.passenger == self
    # end

    # grab the flights off of those tickets
    tickets.map do |tickee| 
      tickee.flight 
    end
  end


  def airlines
    flights.map do |flight|
      flight.airline
    end
  end

end