class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.boolean :response, null: false
      t.index [:user_id, :video_id], unique: true

      t.timestamps
    end
  end
end
