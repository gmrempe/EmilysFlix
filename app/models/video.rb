class Video < ApplicationRecord
    validates :title, presence: true

    has_one_attached :video
    has_one_attached :image
end