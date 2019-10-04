class Video < ApplicationRecord
    validates :title, :description, :year, :maturity_rating, :runtime, :video_type, presence: true

    has_many :video_genres,
    foreign_key: :video_id,
    class_name: :VideoGenre

    has_many :genres,
    through: :video_genres,
    source: :genre

    has_one_attached :video_url

    has_one_attached :photo

end