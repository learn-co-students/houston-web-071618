class CreateDragons < ActiveRecord::Migration[5.2]
  def change
    create_table :dragons do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
