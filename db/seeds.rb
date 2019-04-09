# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require "open-uri"
VideoGenre.destroy_all
Genre.destroy_all
Video.destroy_all
User.destroy_all
MyList.destroy_all
List.destroy_all
Like.destroy_all

user = User.create(email: "Saitama@gmail.com", password: "#OnePunch")
myList = MyList.create(user_id: user.id)

video = Video.create(title: "Bird walking", rating: "PG-13", creator: "Herwin Hayman", yr: "2015", description: "A bird walks on grass.")
video2 = Video.create(title: "Mountains", rating: "G", creator: "Eberhard Grossgasteiger", yr: "2019", description: "Rolling through the ether.")
video3 = Video.create(title: "Pupper", rating: "PG", creator: "Coverr", yr: "2018", description: "Cute and fluffy pupper frolicking on the beach at sunset.")
# video4 = Video.create(title: "Illusion", rating: "TV-Y7", creator: "Truth", yr: "2018", description: "Which way is the water going?")

genre = Genre.create(name: 'Animal')
genre2 = Genre.create(name: 'Nature')

videoGenre = VideoGenre.create(video_id: video.id, genre_id: genre.id)
videoGenre2 = VideoGenre.create(video_id: video2.id, genre_id: genre2.id)
videoGenre3 = VideoGenre.create(video_id: video3.id, genre_id: genre.id)
# videoGenre4 = VideoGenre.create(video_id: video4.id, genre_id: genre2.id)

List.create(video_id: video.id, user_id: user.id)
Like.create(video_id: video_id, user_id: user.id, response: true)

photo = EzDownload.open("https://s3.amazonaws.com/emilysflix-seed/bird.png")
videoUrl = EzDownload.open("https://s3.amazonaws.com/emilysflix-seed/bird.mp4")

# photo4 = EzDownload.open("")
# videoUrl4 = EzDownload.open("https://s3.amazonaws.com/emilysflix-seed/Pexels+Videos+1093652.mp4")

photo3 = EzDownload.open("https://s3.amazonaws.com/emilysflix-seed/Screen+Shot+2019-04-04+at+11.02.08+PM.png")
videoUrl3 = EzDownload.open("https://s3.amazonaws.com/emilysflix-seed/Pexels+Videos+2716.mp4")

photo2 = EzDownload.open("https://s3.amazonaws.com/emilysflix-seed/Screen+Shot+2019-04-04+at+11.01.00+PM.png")
videoUrl2 = EzDownload.open("https://s3.amazonaws.com/emilysflix-seed/Pexels+Videos+4703.mp4")


video.image.attach(io: photo, filename: "bird.png")
video.video.attach(io: videoUrl, filename: "bird.mp4")

# video.image.attach(io: photo, filename: "bird.png")
# video4.video.attach(io: videoUrl4, filename: "Pexels+Videos+1093652.mp4")

video3.image.attach(io: photo3, filename: "Screen+Shot+2019-04-04+at+11.02.08+PM.png")
video3.video.attach(io: videoUrl3, filename: "Pexels+Videos+2716.mp4")

video2.image.attach(io: photo2, filename: "Screen+Shot+2019-04-04+at+11.01.00+PM.png")
video2.video.attach(io: videoUrl2, filename: "Pexels+Videos+4703.mp4")
