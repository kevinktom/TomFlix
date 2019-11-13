class Api::MylistsController < ApplicationController

    def show
        render :show
    end

    def index
        @mylists = MyList.all
    end

    def create
        @mylist = MyList.new(user_id: current_user.id, video_id: params[:videoId])
        if @mylist.save
            render json: {video_id: @mylist[:video_id]}
        else
            render json: {message: "Failed to add to My List"}, status: 422
        end
    end

    def destroy
        @mylist = current_user.my_lists.find_by(video_id: params[:id])
        if @mylist
            @mylist.destroy
            render :show
        else
            render json: {message: "My List does not contain this"}, status: 422
        end
    end

end

