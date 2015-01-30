Rails.application.routes.draw do

  root 'sites#index'
  resources :users, only: [:show, :edit, :update]

  get "about" => "sites#about"
  get "test" => "sites#test"
  get "signup" => 'users#new'
  post "signup" => 'users#create'

  get "signup" => 'sites#new'
  # get "login" => 'sites#new'

  get 'users/profile/:id' => 'users#other_user_profile', as: :profile

  get 'login' => 'sessions#new', as: :login
  post 'login' => 'sessions#create'

  delete 'sessions/destroy'
  get 'logout' => 'sessions#destroy', as: :logout

  get 'discover' => 'events#discover'
  get 'category/:id' => 'events#category', as: :category

  resources :events, except: [:index]
  post 'events/:id/attend' => 'events#attend', as: :event_attend
  post 'events/:id/un_attend' => 'events#un_attend', as: :event_un_attend

  get 'auth/failure' => 'auth#failure'
  get 'auth/:provider/callback' => 'auth#callback'

  get 'payments/venmo_callback' => 'payments#venmo_callback'
  post 'payments/send' => 'payments#make_payment', as: :send_payment


  get '*path' => redirect('/404.html'), via: :all


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'


  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):



  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
