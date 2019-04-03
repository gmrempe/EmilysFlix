class CreateVideoGenresTable < ActiveRecord::Migration[5.2]
  def change
    create_table :video_genres do |t|
      t.integer :genre_id, null:false
      t.integer :video_id, null:false
      t.index [:video_id, :genre_id], unique: true

      t.timestamps
    end
  end
end
