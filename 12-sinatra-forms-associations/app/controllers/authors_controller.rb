class AuthorsController < ApplicationController
    get '/authors/:id' do
        @author = Author.find params[:id]
        erb :'authors/show'
    end
end