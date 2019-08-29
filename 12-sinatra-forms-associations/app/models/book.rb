class Book < ActiveRecord::Base
    belongs_to :author

    def author= author_hash
        if author_hash.class.name == "Author"
            self.author_id = author_hash.id
            self.save
            return
        end

        my_author = Author.find_or_create_by(name: author_hash[:name])
        self.author_id = my_author.id
        self.save
    end
end
