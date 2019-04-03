class VideoGenre < ApplicationRecord
    validates :video_id, :genre_id, presence: true
    validates [:video_id, :genre_id] uniqueness: true  #todo check this validation
    
    has_many :genres,
    className: "Genre",
    foreign_key: :genre_id,
    primary_key: :id

    has_many :videos
end