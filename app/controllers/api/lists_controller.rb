
class Api::ListsController < ApplicationController

    def create
        @video = Video.find(params[:videoId])
        @list = List.new(mylist_id: current_user.mylist, video_id: @video.id)
        if @list.save
            render json: {}
        else
            render json: @list.errors.full_messages
        end

    end

    def destroy
        @list = current_user.mylist_videos

        debugger
        if @list[params[id: :video_id]].destroy
            render json: {}
        else
            render json: @list.erros.full_messages
        end
    end

end