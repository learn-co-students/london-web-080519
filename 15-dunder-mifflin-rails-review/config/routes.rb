Rails.application.routes.draw do
  resources :dogs 
  resources :employees

  #page which displays a list of dogs that are up for adoption
  get "/adoption_dogs", to: "dogs#adoption_dogs"

  #form

  get "/adoption_form/:id", to: "dogs#adoption_form", as: "adoption_form"

  #controller
  patch "/adopt_dog", to: "dogs#adopt_dog", as: "adopt_dog"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
