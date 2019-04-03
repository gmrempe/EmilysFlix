class Genre < ApplicationRecord
    validates :name, presence: true

    has_many :video_genres,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: "VideoGenre"

    # has_many :videos,
    # through: :video_genres,
    # source: :videos
end
