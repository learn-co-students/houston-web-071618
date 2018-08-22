michael = User.first

michael.valuables.create(name: 'sandwiches')

suzy = User.last

suzy.valuables.create(name: 'kitten')