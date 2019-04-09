json.extract! user, :id, :email
json.myListVideoIds user.mylist_videos.pluck(:video_id)

json.likeVideoIds user.likes do |like|
    if like.response == true
        json.video_id like.video_id
    end
end

json.dislikeVideoIds user.likes do |like| 
    if like.response == false
        json.video_id like.video_id
    end
end