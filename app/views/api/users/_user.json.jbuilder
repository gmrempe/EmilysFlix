json.extract! user, :id, :email
json.myListVideoIds user.mylist_videos.pluck(:video_id)
json.likeVideoIds user.likes do |like|
    if like.response == true
        json.id like.video_id
    end
end

json.dislikeVideoIds user.likes do |like|
    if like.response == false
        json.id like.video_id
    end
end
