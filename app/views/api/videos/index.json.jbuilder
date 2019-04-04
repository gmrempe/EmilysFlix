json.array! @videos do |video|
    json.extract! video, :id, :title, :yr, :rating, :creator, :description
    json.videoUrl url_for(video.video)
    json.imageUrl url_for(video.image)
    json.genreIds video.video_genres.pluck(:genre_id)
    json.mylistIds video.my_lists.pluck(:mylist_id)
end