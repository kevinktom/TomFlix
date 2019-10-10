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



#first row
inceptiontest = Video.create!(title: "Inception", description: "In this mind-bending sci-fi thriller, a man runs an espionage business built around entering the subconscious of his targets to mold their thoughts.", year: 2010, maturity_rating: "PG-13", runtime: "2h 28m", video_type: "Movie")
inceptiontest.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/inceptiontest.mp4'), filename: 'inceptiontest.mp4')
inceptiontest.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/inception.jpg'), filename: 'inception.jpg')

avengers = Video.create!(title: "Avengers: Endgame", description: "I Love You 3000.", year: 2019, maturity_rating: "PG-13", runtime: "3h 2m", video_type: "Movie")
avengers.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/avengers.mp4'), filename: 'avengers.mp4')
avengers.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/avengersendgame.jpg'), filename: 'avengersendgame.jpg')

thorragnarok = Video.create!(title: "Thor: Ragnarok", description: "Thor, son of Oden.", year: 2017, maturity_rating: "PG-13", runtime: "1h 52m", video_type: "Movie")
thorragnarok.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thorragnarok.mp4'), filename: 'thorragnarok.mp4')
thorragnarok.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thorragnarok.jpg'), filename: 'thorragnarok.jpg')

guardiansofthegalaxy = Video.create!(title: "Guardians of the Galaxy", description: "I am Groot.", year: 2014, maturity_rating: "PG-13", runtime: "2h 5m", video_type: "Movie")
guardiansofthegalaxy.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/guardiansofthegalaxy.mp4'), filename: 'guardiansofthegalaxy.mp4')
guardiansofthegalaxy.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/guardiansofthegalaxy.jpg'), filename: 'guardiansofthegalaxy.jpg')

exmachina = Video.create!(title: "Ex Machina", description: "What will happen to me if I fail your test?", year: 2015, maturity_rating: "R", runtime: "1h 50m", video_type: "Movie")
exmachina.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/exmachina.mp4'), filename: 'exmachina.mp4')
exmachina.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/exmachina.jpg'), filename: 'exmachina.jpg')

thematrix = Video.create!(title: "The Matrix", description: "Blue pill or Red pill?", year: 1999, maturity_rating: "R", runtime: "2h 30m", video_type: "Movie")
thematrix.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thematrix.mp4'), filename: 'thematrix.mp4')
thematrix.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thematrix.jpg'), filename: 'thematrix.jpg')


#second row comedy

theoffice = Video.create!(title: "The Office", description: "Imitation is the sincerest form of flattery.", year: 2013, maturity_rating: "PG13", runtime: "1 Minute 27 Seconds", video_type: "TV Show")
theoffice.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/seedtheoffice.mp4'), filename: 'seedtheoffice.mp4')
theoffice.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/theoffice.jpg'), filename: 'theoffice.jpg')


community = Video.create!(title: "Community", description: "Cool cool cool.", year: 2009, maturity_rating: "PG-13", runtime: "25m", video_type: "TV Show")
community.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/community.mp4'), filename: 'community.mp4')
community.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/community.jpg'), filename: 'community.jpg')

himym = Video.create!(title: "How I Met Your Mother", description: "The gang takes a shot at being a band.", year: 2005, maturity_rating: "PG-13", runtime: "23m", video_type: "TV Show")
himym.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/himym.mp4'), filename: 'himym.mp4')
himym.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/himym.jpg'), filename: 'himym.jpg')

jumpstreet = Video.create!(title: "22 Jump Street", description: "My name Jeff", year: 2014, maturity_rating: "R", runtime: "1h 52m", video_type: "Movie")
jumpstreet.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/22jumpst.mp4'), filename: '22jumpst.mp4')
jumpstreet.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/22jumpstreet.jpg'), filename: '22jumpstreet.jpg')

theinterview = Video.create!(title: "The Interview", description: "Same same, but different... but still same!", year: 2014, maturity_rating: "R", runtime: "1h 52m", video_type: "Movie")
theinterview.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/theinterview.mp4'), filename: 'theinterview.mp4')
theinterview.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/theinterview.jpg'), filename: 'theinterview.jpg')

thefreshprince = Video.create!(title: "The Fresh Prince of Bel Air", description: "It's not unusual to be loved by anyone", year: 1990, maturity_rating: "PG-13", runtime: "22m", video_type: "TV Show")
thefreshprince.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thefreshprince.mp4'), filename: 'thefreshprince.mp4')
thefreshprince.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thefreshprince.jpg'), filename: 'thefreshprince.jpg')


#third row family and kids

ratatouille = Video.create!(title: "Ratatouille", description: "Nothing beats cooking that tastes like home, especially if a rat makes it.", year: 2007, maturity_rating: "G", runtime: "1h 51m", video_type: "Movie")
ratatouille.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/ratatouille.mp4'), filename: 'ratatouille.mp4')
ratatouille.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/ratatouille.jpg'), filename: 'ratatouille.jpg')

nemo = Video.create!(title: "Finding Nemo", description: "Just keep swimming.", year: 2003, maturity_rating: "G", runtime: "1h 44m", video_type: "Movie")
nemo.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/findingnemo.mp4'), filename: 'findingnemo.mp4')
nemo.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/nemo.jpg'), filename: 'nemo.jpg')

wreckitralph = Video.create!(title: "Ralph Breaks the Internet", description: "The bunny gets the pancake!", year: 2018, maturity_rating: "PG", runtime: "1h 56m", video_type: "Movie")
wreckitralph.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/wreckitralph.mp4'), filename: 'wreckitralph.mp4')
wreckitralph.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/wreckitralph2.jpg'), filename: 'wreckitralph2.jpg')


monstersinc = Video.create!(title: "Monsters Inc.", description: "Boo!", year: 2001, maturity_rating: "G", runtime: "1h 31m", video_type: "Movie")
monstersinc.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/monstersinc.mp4'), filename: 'monstersinc.mp4')
monstersinc.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/monstersinc.jpg'), filename: 'monstersinc.jpg')


thegreatestshowman = Video.create!(title: "The Greatest Showman", description: "This is the greatest show!", year: 2017, maturity_rating: "PG", runtime: "1h 46m", video_type: "Movie")
thegreatestshowman.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thegreatestshowman.mp4'), filename: 'thegreatestshowman.mp4')
thegreatestshowman.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thegreatestshowman.jpg'), filename: 'thegreatestshowman.jpg')

harrypotter = Video.create!(title: "Harry Potter and the Sorcerer's Stone", description: "Hermione shows Ron up with a seemingly simple swish and flick.", year: 2001, maturity_rating: "PG", runtime: "2h 39m", video_type: "Movie")
harrypotter.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/harrypotter.mp4'), filename: 'harrypotter.mp4')
harrypotter.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/harrypotter.jpg'), filename: 'harrypotter.jpg')



#4th row
bohemianrhapysody = Video.create!(title: "Bohemian Rhapsody", description: "Good thoughts, good words, good deeds", year: 2018, maturity_rating: "PG-13", runtime: "2h 13m", video_type: "Movie")
bohemianrhapysody.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/bohemianrhapsody.mp4'), filename: 'bohemianrhapysody.mp4')
bohemianrhapysody.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/bohemianrhapsody.jpg'), filename: 'bohemianrhapysody.jpg')

forrestgump = Video.create!(title: "Forrest Gump", description: "Life's like a box of chocolates", year: 1994, maturity_rating: "PG-13", runtime: "2h 22m", video_type: "Movie")
forrestgump.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/forrestgump.mp4'), filename: 'forrestgump.mp4')
forrestgump.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/forrestgump.jpg'), filename: 'forrestgump.jpg')

thepursuitofhappyness = Video.create!(title: "The Pursuit of Happyness", description: "You got a dream... You gotta protect it.", year: 2006, maturity_rating: "PG-13", runtime: "1h 57m", video_type: "Movie")
thepursuitofhappyness.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thepursuitofhappyness.mp4'), filename: 'thepursuitofhappyness.mp4')
thepursuitofhappyness.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/thepursuitofhappyness.jpg'), filename: 'thepursuitofhappyness.jpg')

lalaland = Video.create!(title: "La La Land", description: "City of Stars", year: 2016, maturity_rating: "PG-13", runtime: "2h 8m", video_type: "Movie")
lalaland.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/lalaland.mp4'), filename: 'lalaland.mp4')
lalaland.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/lala.jpg'), filename: 'lala.jpg')

wolfofwallstreet = Video.create!(title: "The Wolf of Wall Street", description: "I'm not leaving!", year: 2013, maturity_rating: "R", runtime: "3h", video_type: "Movie")
wolfofwallstreet.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/wolfofwallstreet.mp4'), filename: 'wolfofwallstreet.mp4')
wolfofwallstreet.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/wolfofwallstreet.jpg'), filename: 'wolfofwallstreet.jpg')

fightclub = Video.create!(title: "Fight Club", description: "First rule of Fight Club, do not talk about Fight Club.", year: 1999, maturity_rating: "R", runtime: "2h 31m", video_type: "Movie")
fightclub.video_url.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/fightclub.mp4'), filename: 'fightclub.mp4')
fightclub.photo.attach(io: open('https://tomflix-seeds.s3.amazonaws.com/fightclub.jpg'), filename: 'fightclub.jpg')

