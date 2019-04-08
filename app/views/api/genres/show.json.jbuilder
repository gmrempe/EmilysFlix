json.extract! @genre, :name, :id
json.videoIds @genre.video_genres.pluck(:video_id)