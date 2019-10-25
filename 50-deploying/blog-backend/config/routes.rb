Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
          resources :users, only: [:index, :create]
          resources :posts, only: [:index, :create, :show]
          post '/login', to: 'auth#create'
          post '/validate', to: 'auth#validate'
      end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
