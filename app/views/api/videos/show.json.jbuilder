json.extract! @video, :id, :title, :yr, :rating, :creator, :description
debugger
json.videoUrl url_for(@video.video)
json.imageUrl url_for(@video.photo)