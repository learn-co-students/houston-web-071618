class Dog < ApplicationRecord
  validates :name, presence: true, length: { minimum: 5 }
  validates :num_legs, presence: true
  validates :owner, presence: true
end
