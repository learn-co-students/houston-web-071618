Rails.application.routes.draw do
  resources :rappers
  get '/rappersdelight', to: 'rappers#rappers_delight_action'
end
