# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)

DragonAbility.delete_all
Dragon.delete_all
User.delete_all
Ability.delete_all

alex = User.create(name:'Alex')
scottT = User.create(name:'Scott T')
angela = User.create(name:'Angela')
derek = User.create(name:'Derek')
stephen = User.create(name:'Stephen')
daniel = User.create(name:'Daniel')
ric = User.create(name:'Ric')
ray = User.create(name:'Ray')
marylene = User.create(name:'Marylene')
cindy = User.create(name:'Cindy')
jessica = User.create(name:'Jessica')
paublo = User.create(name:'Paublo')
erika = User.create(name:'Erika')
erica = User.create(name:'Erica')
jeannie = User.create(name:'Jeannie')
kelly = User.create(name:'Kelly')
scottU = User.create(name:'Scott U')
kevin = User.create(name:'Kevin')
chantal = User.create(name:'Chantal')
becci = User.create(name:'Becci')
kenny = User.create(name:'Kenny')
cassandra = User.create(name:'Cassandra')
chris = User.create(name:'Chris')
ryhan = User.create(name:'Ryhan')
sean = User.create(name:'Sean')
nancy = User.create(name:'Nancy')

flight = Ability.create(name:'flight')
fire_breath = Ability.create(name:'fire breath')
regeneration = Ability.create(name:'regeneration')
razor_claws = Ability.create(name:'razor claws')

toothless = Dragon.create(name:'toothless', user: alex, abilities: [flight, fire_breath])
smaug = Dragon.create(name:'smaug', user: scottT, abilities: [flight, fire_breath])
ryuu = Dragon.create(name:'ryuu', user: kelly, abilities: [razor_claws, regeneration])
drago = Dragon.create(name:'drago', user: sean, abilities: [flight, fire_breath])
maur = Dragon.create(name:'maur', user: nancy, abilities: [regeneration, fire_breath, razor_claws])
saphira = Dragon.create(name:'saphira', user: chris, abilities:[flight, razor_claws])