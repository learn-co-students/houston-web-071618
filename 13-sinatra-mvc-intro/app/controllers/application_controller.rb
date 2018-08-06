class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

  get '/books' do
    @books = Book.all
    @hello = 'hello'

    erb :'books/index'
  end
end
