# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.create(email: "Saitama@gmail.com", password: "#OnePunch")

video = Video.create(title: "Bird walking", rating: "G", creator: "Herwin Hayman", yr: "2015", description: "A bird walks on grass")
# video2 = Video.create(title: "Mountains", rating: "G", creator: nil, yr: "2018", description: "Clouds fly by")

genre = Genre.create(name: 'Animal')


photo = open("https://s3.amazonaws.com/emilysflix-dev/Screen+Shot+2019-03-29+at+11.53.28+AM.png")
videoUrl = open("https://s3.amazonaws.com/emilysflix-dev/Pexels+Videos+1550669.mp4")
# videoUrl = open("")


video.image.attach(io: photo, filename: "bird.png")
video.video.attach(io: videoUrl, filename: "bird.mp4")
# video.attach(io: videoUrl, filename: "mountain.mp4")  