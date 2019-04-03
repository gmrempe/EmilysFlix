class Api::GenresController < ApplicationController

    def index
        @index = Index.all
        render :index
    end

end