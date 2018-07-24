class Tweet
  attr_accessor :message, :username

  def self.all
    sql_query = <<-SQL
    SELECT * FROM tweets
    SQL

    results = DB[:conn].execute(sql_query)

    results.map do |tweet_hash|
      Tweet.new(tweet_hash)
    end
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def save
    sql_query = <<-SQL
    INSERT INTO tweets (username, message) VALUES (?, ?)
    SQL

    DB[:conn].execute(sql_query, self.username, self.message)
  end

  def self.create(props={})
    new_tweet = Tweet.new(props)
    new_tweet.save
  end
end
