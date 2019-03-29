class Api::VideosController < ApplicationController



    def index
        @videos = Video.all
        render "api/videos"
    end

    def show
        @video = Video.find_by(id: params[:id])
        render "api/videos/#{@video.id}"
    end
    
end