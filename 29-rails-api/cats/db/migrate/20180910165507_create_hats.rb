class CreateHats < ActiveRecord::Migration[5.2]
  def change
    create_table :hats do |t|
      t.belongs_to :cat, foreign_key: true
      t.string :color

      t.timestamps
    end
  end
end
