class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :video_url, null:false
      t.text :description
      t.string :rating
      t.integer :yr
      t.string :title, null:false
      t.string :creator
      t.string :image_url, null:false
      t.index :video_url, unique: true

      t.timestamps
    end
  end
end
