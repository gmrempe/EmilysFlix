class CreateMyListTable < ActiveRecord::Migration[5.2]
  def change
    create_table :my_list do |t|
      t.string :user_id, null: false
      t.index :user_id, unique: true

      t.timestamps
    end
  end
end
