class Author < ActiveRecord::Base
  has_many :books

  # Author.create(
  #   name: 'dr seuss',
  #   dob: 'some other time',
  #   book_names: ['the lorax', 'green eggs and ham', '1f2frfbf']
  # )

  def book_names=(book_names)
    # create the books
    # make the association

    book_objs = book_names.map do |book_name|
      Book.create(title: book_name)
    end

    self.books << book_objs

    # book_names.each do |book_name|
    #   Book.create(title: book_name, author: self)
    # end

    # book_names.each do |book_name|
    #   self.books.create(title: book_name)
    # end
  end
end
