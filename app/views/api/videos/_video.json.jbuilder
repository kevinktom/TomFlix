json.extract! video, :id, :title, :description, :year, :maturity_rating, :runtime, :video_type, :genre_ids

json.video_url url_for(video.video_url)
json.photo_url url_for(video.photo)