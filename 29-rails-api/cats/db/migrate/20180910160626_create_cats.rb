class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.boolean :wears_hat

      t.timestamps
    end
  end
end
