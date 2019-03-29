# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email: "Saitama@gmail.com", password: "#OnePunch")

Video.create(title: "Bird walking", video_url: "https://s3.amazonaws.com/emilysflix-dev/Pexels+Videos+1550669.mp4", rating: "G", creator: "Herwin Hayman", yr: "2015", description: "A bird walks on grass", image_url: "https://s3.amazonaws.com/emilysflix-dev/Screen+Shot+2019-03-29+at+11.53.28+AM.png")