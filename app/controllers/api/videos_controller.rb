class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
    end

    def show
        @video = Video.find(params[:id])
    end
    
end