Rails.application.routes.draw do
  resources :services
  resources :cars
  resources :owners
  resources :mechanics
  resources :brands
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
