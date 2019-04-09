class Api::LikesController < ApplicationController

    def create
        @like = Like.new(user_id: current_user.id, video_id: params[:videoId], response: params[:response]) # todo
        if @like.save
            render json: {}
        else
            render json: @like.errors.full_messages
        end
    end

    def destroy
        @likes = current_user.likes
        # debugger
        if @likes.find_by(video_id: params[:id]).destroy
            render json: {}
        else
            render json: @likes.errors.full_messages
        end
    end

end