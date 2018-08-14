class Book < ActiveRecord::Base
  belongs_to :author

  # Book.create(
  #   title: 'big sur',
  #   snippet: 'california',
  #   author: Author.first,
  #   random: 'derek'
  # )

  def random=(value)
    puts 'hello rick'
  end
end
