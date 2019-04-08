class Video < ApplicationRecord
    validates :title, presence: true

    has_one_attached :video
    has_one_attached :image

    has_many :video_genres,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: "VideoGenre"

    has_many :my_lists,
    class_name: "List",
    primary_key: :id,
    foreign_key: :video_id

    # has_one :user,
    # through: :my_lists,
    # source: :user
    
end