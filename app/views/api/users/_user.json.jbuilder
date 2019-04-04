json.extract! user, :id, :email
json.myListVideoIds user.mylist_videos.pluck(:video_id)