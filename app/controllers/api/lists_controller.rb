
class Api::ListsController < ApplicationController

    # def index

    # end

    def create
        @list = List.new(mylist_id: current_user.mylist.id, video_id: params[:videoId])
        if @list.save
            render json: {}
        else
            render json: @list.errors.full_messages
        end
    end

    def destroy
        @list = current_user.mylist_videos
        if @list.find_by(video_id: params[:id]).destroy
            render json: {}
        else
            render json: @list.errors.full_messages
        end
    end

end