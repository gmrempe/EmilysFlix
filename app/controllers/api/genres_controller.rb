class Api::GenresController < ApplicationController

    def index
        @genres = Genre.includes(:video_genres).all
        render :index
    end

    def show
        @genre = Genre.find(params[:id])
        render :show
    end

end