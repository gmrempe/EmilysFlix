class Api::VideoGenresController < ApplicationController

    def show
        @video_genres = Video.find(params[:id])
        render :show
    end

end