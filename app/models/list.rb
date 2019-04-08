class List < ApplicationRecord
    validates :mylist_id, :video_id, presence: true
    validates :mylist_id, uniqueness: {scope: :video_id}

    belongs_to :mylist,
    class_name: "MyList",
    primary_key: :id,
    foreign_key: :mylist_id

    belongs_to :video,
    class_name: "Video",
    primary_key: :id,
    foreign_key: :video_id
end
