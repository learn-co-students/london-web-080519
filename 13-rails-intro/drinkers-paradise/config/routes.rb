Rails.application.routes.draw do
  get 'bars', to: 'bars#index'
  get 'bars/new', to: 'bars#new', as: :new_bar
  get 'bars/:id', to: 'bars#show', as: :bar
  post 'bars', to: 'bars#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
