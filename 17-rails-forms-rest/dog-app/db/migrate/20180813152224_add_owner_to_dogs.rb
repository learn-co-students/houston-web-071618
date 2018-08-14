class AddOwnerToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :owner, :string
  end
end
