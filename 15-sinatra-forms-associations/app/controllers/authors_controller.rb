class AuthorsController < ApplicationController
  get "/authors/new" do
    # authors/show
    erb :'authors/new'
  end

  get "/authors/:id" do
    @author = Author.find(params[:id])
    # authors/show
    erb :'authors/show'
  end

  post "/authors" do
    # create the author
    # redirect to the author#show
    author = Author.create(params[:author])

    redirect "/authors/#{author.id}"
  end

end
