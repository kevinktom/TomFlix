class MyList < ActiveRecord::Migration[5.2]
  def change
    create_table :my_lists do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
    add_index :my_lists, :user_id
    add_index :my_lists, :video_id, unique: true
  end
end
