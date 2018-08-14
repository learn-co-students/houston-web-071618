class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :num_legs
      t.belongs_to :owner, foreign_key: true

      t.timestamps
    end
  end
end
