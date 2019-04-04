require "byebug"

class Api::VideoMyListsController < ApplicationController

    def create
        # debugger
        # @video = Video.find(params[:id])
        # @videoMyList = VideoMyList.new(user_id: current_user.id, video_id: @video.id)
        # if @videoMyList.save
        #     render json: {}
        # end
    end

    def destroy
        # @videoMyList = current_user.my_list_videos.find(params[:id])
        # @videoMyList.destroy
        # render json: {}
    end

end