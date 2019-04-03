class Genre < ApplicationRecord
    validates :name, presence: true

    belongs_to :video_genres,
    primary_key: :id,
    foreign_key: :genre_id,
    className: "VideoGenre"

    has_many :videos,
    through: :video_genres,
    source: :videos
end
