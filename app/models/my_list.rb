class MyList < ApplicationRecord
    validates :user_id, presence: true
    validates :user_id, uniqueness: true

    has_many :videos,
    class_name: "VideoMyList",
    primary_key: :id,
    foreign_key: :mylist_id

    belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
end