class RenameTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :video_my_lists, :lists
  end
end
