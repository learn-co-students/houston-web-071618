require 'pry'

require_relative './flight.rb'
require_relative './passenger.rb'
require_relative './ticket.rb'



jfk_hobby_united = Flight.new("United", "JFK", "HOU")
bush_dal_spirit = Flight.new("Spirit", "IAH", "DAL")
bush_lax_southwest = Flight.new("Southwest", "IAH", "LAX")


graham = Passenger.new("Graham")
humzah = Passenger.new("Humzah")
josh = Passenger.new("Josh")
michael = Passenger.new("Michael")


ticket_to_houston_graham = Ticket.new(graham, jfk_hobby_united)
ticket_to_la_graham = Ticket.new(graham, bush_lax_southwest)
humzah_spirit_misery = Ticket.new(humzah, bush_dal_spirit)

# graham.add_ticket(ticket_to_houston_graham)
# graham.add_ticket(ticket_to_la_graham)

# graham.delete_ticket(ticket_to_la_graham)

jfk_hobby_united.passenger_manifest
Ticket.all

# graham.flights

# ticket_to_houston_graham.change_passenger(josh)


binding.pry

true
