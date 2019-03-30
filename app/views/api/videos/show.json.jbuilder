json.extract! @video, :id, :title, :yr, :rating, :creator, :description
json.videoUrl url_for(@video.video)
json.imageUrl url_for(@video.photo)
