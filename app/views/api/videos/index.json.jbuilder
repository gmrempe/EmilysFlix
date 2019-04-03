json.array! @videos do |video|
    json.extract! video, :id, :title, :yr, :rating, :creator, :description
    json.videoUrl url_for(video.video)
    json.imageUrl url_for(video.image)
    json.genreIds video.video_genre.pluck(:genre_id)
end