json.extract! video, :id, :description, :year, :maturity_rating, :runtime, :video_type

json.video_url url_for(video.video_url)
json.photo_url url_for(video.photo)