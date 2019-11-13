import React from "react";
import VideosContainer from './videos_index/videos_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash/splash_form_container';
import VideoPlayerContainer from './video_player/video_player_container';
import GenreContainer from './genres/genre_container';
import MylistContainer from './mylists/mylist_container';
import Search from './search/search_container';
import NavBar from './navbar/navbar_container';


const App = () => {
  return(
    <div>
      <header>
        
      </header>
      <Switch>
        <AuthRoute path='/signin' component={LoginFormContainer}/> 
        <AuthRoute path='/signup' component={SignUpContainer}/> 
        <ProtectedRoute exact path='/browse' component={VideosContainer}/>
        <ProtectedRoute exact path='/browse/my-list' component={MylistContainer}/>
        <ProtectedRoute exact path='/browse/:videoId' component={VideoPlayerContainer}/>
        <ProtectedRoute exact path='/genre/:genreId' component={GenreContainer}/>
        <ProtectedRoute exact path='/search/:searchinput' component={Search}/>
        <AuthRoute exact path='/' component={SplashContainer}/>
      </Switch>
    </div>
  )
  };

export default App;