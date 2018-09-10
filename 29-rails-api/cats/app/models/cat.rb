class Cat < ApplicationRecord
  has_many :hats
  validates :name, presence: true
end
