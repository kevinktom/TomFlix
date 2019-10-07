class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
    end

    def show
        @video = Video.find(params[:id])
        # render "api/"
    end

    private

    # def video_params
    #     params.require(:video).permit(:title,:description,:year,:maturity_rating,:runtime, :video_type)
    # end

end