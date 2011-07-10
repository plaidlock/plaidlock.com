Plaidlock::Application.routes.draw do
  match ':action' => 'pages', :as => 'page'
  root :to => redirect('/home')
end