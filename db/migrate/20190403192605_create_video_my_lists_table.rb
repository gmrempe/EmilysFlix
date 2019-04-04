class CreateVideoMyListsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :video_my_lists do |t|
      t.integer :video_id, null: false
      t.integer :mylist_id, null: false
      t.index [:mylist_id, :video_id], unique: true

      t.timestamps
    end
  end
end
