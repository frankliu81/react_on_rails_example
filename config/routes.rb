Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'hello_earth', to: 'hello_earth#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
