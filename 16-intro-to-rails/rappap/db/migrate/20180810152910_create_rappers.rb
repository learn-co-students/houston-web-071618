class CreateRappers < ActiveRecord::Migration[5.2]
  def change
    create_table :rappers do |t|
      t.string :name
      t.string :hometown
      t.integer :age
      t.string :phrase

      t.timestamps
    end
  end
end
