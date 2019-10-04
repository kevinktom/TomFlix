class Genre < ApplicationRecord
    validates :genre, presence: true

    has_many :video_genres,
    foreign_key: :genre_id,
    class_name: :VideoGenre

    has_many :videos,
    through: :video_genres,
    source: :video
end