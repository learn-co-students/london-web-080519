Book.destroy_all
Author.destroy_all

madeline = Author.create(name: "Madeline L'Engle")
GoogleBooks::Adapter.new(madeline).fetch_books
