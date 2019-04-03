class Api::VideosController < ApplicationController

    def index
        @videos = Video.includes(:video_genre).all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end
    
end