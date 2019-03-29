class Video < ApplicationRecord
    validates :video_url, :title, :image_url, presence: true
    validates :video_url, uniqueness: true

    
end