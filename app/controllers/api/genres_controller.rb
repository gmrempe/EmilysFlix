class Api::GenresController < ApplicationController

    def index
        @genres = Genre.includes(:video_genres).all
        render :index
    end

end