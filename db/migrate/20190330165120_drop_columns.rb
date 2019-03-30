class DropColumns < ActiveRecord::Migration[5.2]
  def change
    remove_index :videos, :video_url
    remove_column :videos, :image_url
    remove_column :videos, :video_url
  end
end
