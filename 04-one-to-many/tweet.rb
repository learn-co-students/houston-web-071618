class Tweet

  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all.push(self)
  end

  def self.all
    @@all
  end

  def user_name
    self.user.user_name
  end


end