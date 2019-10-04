class VideoGenre < ApplicationRecord
    belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video

    belongs_to :genre,
    foreign_key: :genre_id,
    class_name: :Genre
end