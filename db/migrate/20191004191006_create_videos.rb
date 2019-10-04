class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :year, null: false
      t.string :maturity_rating, null: false
      t.string :runtime, null: false
      t.string :video_type, null: false
      t.timestamps
    end
    add_index :videos, :title
  end
end
