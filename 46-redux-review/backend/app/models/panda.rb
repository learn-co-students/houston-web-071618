class Panda < ApplicationRecord
    has_many :foods
    has_secure_password
end
