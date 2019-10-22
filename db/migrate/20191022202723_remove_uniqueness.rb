class RemoveUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :my_lists, :video_id
    add_index :my_lists, :video_id
  end
end
