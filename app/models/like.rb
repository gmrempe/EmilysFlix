class Like < ApplicationRecord
    validates :user_id, :video_id, :response, presence: true
    validates :user_id, uniqueness: {scope: :video_id}

    belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

    belongs_to :video,
    class_name: "Video",
    foreign_key: :video_id,
    primary_key: :id
end