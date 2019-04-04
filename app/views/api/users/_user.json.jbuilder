json.extract! user, :id, :email
json.mylistVideoIds user.mylist_videos.pluck(:video_id)