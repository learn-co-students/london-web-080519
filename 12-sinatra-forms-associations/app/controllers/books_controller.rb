class BooksController < ApplicationController
  # Index Route - Gets all the books then renders them on the Index page
  get '/books' do
    @books = Book.all
    erb :'books/index'
  end

  #New Route - Renders the form to add a New book
  get '/books/new' do
    erb :"books/new"
  end

  # Show Route - Finds a the book then renders the details for the book
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :'books/show'
  end

  #Create Route - Creates a book in the database then redirects to the Show Route
  post "/books" do
    # params[:book] is a hash containing all values from our form, created from our form inputs
    # create can take a hash as an argument and fill in the attributes of the object based on the
    # keys/values in the hash
    book = Book.create(params[:book])
    redirect "/books/#{book.id}"
  end

  #Edit Route - Finds a book then enders the Edit Form for a book with it's current details
  get "/books/:id/edit" do
    @book = Book.find(params[:id])
    erb :'books/edit'
  end

  #Update Route - Finds a book, updates it's details and saves it to the database, then redirects to the Show Route
  patch "/books/:id" do
    @book = Book.find(params[:id])
    @book.update(params[:book])
    redirect "/books/#{@book.id}"
  end

  #Destroy Route - Finds and deletes a book in the database, then redirects to the Index Route
  delete "/books/:id" do
    Book.destroy(params[:id])
    redirect "/books"
  end



end
