class VideoGenre < ApplicationRecord
    validates :video_id, :genre_id, presence: true
    validates :video_id, uniqueness: {scope: :genre_id}
    
    belongs_to :genres,
    class_name: "Genre",
    foreign_key: :genre_id,
    primary_key: :id

    belongs_to :videos,
    class_name: "Video",
    foreign_key: :video_id,
    primary_key: :id
end