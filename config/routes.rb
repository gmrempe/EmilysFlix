Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:show, :index]
    resources :genres, only: [:index, :show]
    resources :lists, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
  end

  root "static_pages#root"
end
