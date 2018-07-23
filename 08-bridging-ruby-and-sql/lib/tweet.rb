class Tweet
  attr_accessor :message, :username
  @@all = []

  def self.all
    @@all
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @@all << self
  end
end
