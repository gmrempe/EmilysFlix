json.array! @genres do |genre|
    json.name genre.name
    json.id genre.id
    json.videoIds genre.video_genres.pluck(:video_id)
end