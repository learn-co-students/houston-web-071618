class Dragon < ApplicationRecord
  belongs_to :user, optional: true
  has_many :dragon_abilities
  has_many :abilities, through: :dragon_abilities

  validates :name, presence: true
  validates :abilities, presence: true
end
