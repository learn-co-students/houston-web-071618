require 'pry'
require_relative 'tweet'
require_relative 'user'

michael = User.new("Michael")
michael.post_tweet("Hello!")

Pry.start
