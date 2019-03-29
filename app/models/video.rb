class Video < ApplicationRecord
    validates :video_url, :title, :image_url, presence: true
    validates :video_url, uniqueness: true

    has_one_attached :video
    has_one_attached :photo
end