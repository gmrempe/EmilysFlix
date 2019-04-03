class DropTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :my_list
    drop_table :video_my_list
  end
end
