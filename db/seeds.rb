# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Video.destroy_all

testUser = User.create(email: "hire@me.please", password:"password")
# testUser2 = User.create(email: "demo@demo.com", password:"password")
# testvideo = Video.create!(title: "Chickens!", description: "Look at all those chickens!", year: 2019 , maturity_rating: "PG13", runtime: "43", video_type: "video")
# testvideo.video_url.attach(io: File.open("/Users/kevintom/Documents/lookchickens.mp4"), filename:"lookchickens.mp4")

# theoffice = Video.create!(title: "The Office", description: "Imitation is the sincerest form of flattery.", year: 2013, maturity_rating: "PG13", runtime: "1 Minute 27 Seconds", video_type: "video")
# theoffice.video_url.attach(io: open('https://tomflix-dev.s3.amazonaws.com/theoffice.mp4'), filename: 'theoffice.mp4')
# theoffice.photo.attach(io: open('https://tomflix-dev.s3.amazonaws.com/theoffice.jpg'), filename: 'theoffice.jpg')

theoffice = Video.create!(title: "The Office", description: "Imitation is the sincerest form of flattery.", year: 2013, maturity_rating: "PG13", runtime: "1 Minute 27 Seconds", video_type: "TV Show")
theoffice.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/seedtheoffice.mp4'), filename: 'seedtheoffice.mp4')
theoffice.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/theoffice.jpg'), filename: 'theoffice.jpg')


inceptiontest = Video.create!(title: "Inception", description: "In this mind-bending sci-fi thriller, a man runs an espionage business built around entering the subconscious of his targets to mold their thoughts.", year: 2010, maturity_rating: "PG-13", runtime: "2h 28m", video_type: "Movie")
inceptiontest.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/inceptiontest.mp4'), filename: 'inceptiontest.mp4')
inceptiontest.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/inception.jpg'), filename: 'inception.jpg')

avengers = Video.create!(title: "Avengers: Endgame", description: "I Love You 3000.", year: 2019, maturity_rating: "PG-13", runtime: "3h 2m", video_type: "Movie")
avengers.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/avengers.mp4'), filename: 'avengers.mp4')
avengers.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/avengersendgame.jpg'), filename: 'avengersendgame.jpg')

community = Video.create!(title: "Community", description: "Cool cool cool.", year: 2009, maturity_rating: "PG-13", runtime: "25m", video_type: "TV Show")
community.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/community.mp4'), filename: 'community.mp4')
community.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/community.jpg'), filename: 'community.jpg')

exmachina = Video.create!(title: "Ex Machina", description: "What will happen to me if I fail your test?", year: 2015, maturity_rating: "R", runtime: "1h 50m", video_type: "Movie")
exmachina.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/exmachina.mp4'), filename: 'exmachina.mp4')
exmachina.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/exmachina.jpg'), filename: 'exmachina.jpg')

harrypotter = Video.create!(title: "Harry Potter and the Sorcerer's Stone", description: "Hermione shows Ron up with a seemingly simple swish and flick.", year: 2001, maturity_rating: "PG", runtime: "2h 39m", video_type: "Movie")
harrypotter.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/harrypotter.mp4'), filename: 'harrypotter.mp4')
harrypotter.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/harrypotter.jpg'), filename: 'harrypotter.jpg')

himym = Video.create!(title: "How I Met Your Mother", description: "The gang takes a shot at being a band.", year: 2005, maturity_rating: "PG-13", runtime: "23m", video_type: "TV Show")
himym.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/himym.mp4'), filename: 'himym.mp4')
himym.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/himym.jpg'), filename: 'himym.jpg')

ratatouille = Video.create!(title: "Ratatouille", description: "Nothing beats cooking that tastes like home, especially if a rat makes it.", year: 2007, maturity_rating: "G", runtime: "1h 51m", video_type: "Movie")
ratatouille.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/ratatouille.mp4'), filename: 'ratatouille.mp4')
ratatouille.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/ratatouille.jpg'), filename: 'ratatouille.jpg')

wreckitralph = Video.create!(title: "Ralph Breaks the Internet", description: "The bunny gets the pancake!", year: 2018, maturity_rating: "PG", runtime: "1h 56m", video_type: "Movie")
wreckitralph.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/wreckitralph.mp4'), filename: 'wreckitralph.mp4')
wreckitralph.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/wreckitralph2.jpg'), filename: 'wreckitralph2.jpg')
