require 'pry'
require 'rest-client'
require 'json'

def get_search_term
  puts "Enter a search:"
  search_term = gets.chomp
end

def get_and_parse_response(search_term)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
  parsed_hash = JSON.parse(response)
  
  items = parsed_hash["items"]
end

def get_title(volume_info)
  title = volume_info["title"]
end

def get_authors(volume_info)
  authors = volume_info["authors"]

  if authors
    authors = authors.join(', ')
  else
    authors = 'No authors available'
  end
end

def get_description(volume_info)
  description = volume_info["description"]

  if description
    description = description[0..140]
  else
    description = "No description available"
  end
end

def print_book(title, authors, description)
  puts "*" * 30
  puts title
  puts authors
  puts description
end

def run
  # Make search term dynamic
  search_term = get_search_term

  items = get_and_parse_response(search_term)

  items.each do |book_hash|
    volume_info = book_hash["volumeInfo"]
    
    title = get_title(volume_info)
    authors = get_authors(volume_info)
    description = get_description(volume_info)

    print_book(title, authors, description)
  end
end

run
