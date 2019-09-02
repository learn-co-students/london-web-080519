Rails.application.routes.draw do
  resources :drinks, only: [:create, :show, :new]
  resources :bars
  # get 'drinks/:id', to: 'drinks#show'
  # get 'drinks/new'
  # post 'drinks'
  # get 'bars', to: 'bars#index'
  # get 'bars/new', to: 'bars#new', as: :new_bar
  # get 'bars/:id', to: 'bars#show', as: :bar
  # post 'bars', to: 'bars#create'
  # get 'bars/:id/edit', to: 'bars#edit', as: :edit_bar
  # patch 'bars/:id', to: 'bars#update'
  # delete 'bars/:id', to: 'bars#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
