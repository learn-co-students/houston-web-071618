michael = Owner.create(name: 'Michael')
suzy = Owner.create(name: 'Suzy')
bartholomew = Owner.create(name: 'Bartholomew')

Dog.create(name: 'Fluffy', num_legs: 4, owner: michael)
Dog.create(name: 'Bozo', num_legs: 1, owner: michael)
Dog.create(name: 'Rex', num_legs: 8, owner: suzy)