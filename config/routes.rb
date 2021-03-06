Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

    # namespace :api do
  namespace :api, defaults: { format: "json"} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
    resources :genres, only: [:show]
    resources :mylists, only: [:index, :show, :create, :destroy]
  end
end
