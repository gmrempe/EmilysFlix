class Video < ApplicationRecord
    validates :title, presence: true

    has_one_attached :video
    has_one_attached :image

    has_many :video_genre,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: "VideoGenre"
    
    # has_many :genres,
    # through: :video_genre,
    # source: :videos
    
end