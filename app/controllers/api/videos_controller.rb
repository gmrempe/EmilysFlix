class Api::VideosController < ApplicationController

    def index
        @videos = Video.includes(:video_genres, :my_lists).all        
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end
    
end