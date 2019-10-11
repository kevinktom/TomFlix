# README

Alt-Tomflix
=======
[![forthebadge](https://forthebadge.com/images/badges/powered-by-netflix.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

Tomflix is a personal rendition and clone of the media-streaming website Netflix that allows users to view Movies and TV Shows at their leisure. It is built using **Ruby on Rails** for the backend, **PostgreSQL** for the database, and **React & Redux** for the frontend. The website is hosted on **Heroku** while the media is stored on **AWS**.
Website: [Tomflix](https://tom-flix.herokuapp.com/)


Alt-Features
------------
1. Frontend and Backend User Authentication
⋅⋅1. Demo login
⋅⋅1. Main video upon login autoplays and can be muted/unmuted on the index page
⋅⋅1. Movies are split up into genres with the ability for the user to play the video on hover
⋅⋅1. Videos can be played on a fullscreen video player 
⋅⋅1. Users can navigate to different links on the navbar which display different categories such as Movies & TV Shows

Alt-Video Hover
---------------

![alt text](https://giphy.com/gifs/tomflix-WsuVzWBDQGZd3N06dC)

* Uses event listeners to play, pause, and set the time of the video with "onMouseOver" and "onMouseLeave"
* On click of the video will bring the user to the video player where the video will play
* Videos scale on hover after 750 milliseconds 

### Event Handlers
```
handleHoverPlay(e){
    e.persist();
    e.target.play().then(null, () => {
      e.target.muted = true
      e.target.play();
    });
  }

handleHoverLeave(e){
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
    e.currentTarget.load();
}
```

Alt-Updates to come
-------------------
* Descriptions on videos
* Search functionality
* MyList

Alt-Contact Me
-----------------------
Email: KevinKTom@gmail.com
Github: https://github.com/kevinktom 
