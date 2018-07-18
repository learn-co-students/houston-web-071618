class BankAccount

  @@all = []
  @@number_of_times_anyone_has_changed_their_name_ever = 0

  attr_reader :balance, :account_number
  # attr_writer :balance
  # attr_accessor :balance

  def initialize(name, initial_balance = 0)
    @name = name
    @balance = initial_balance
    @@all << self
  end

  def name=(new_name)
    @@number_of_times_anyone_has_changed_their_name_ever += 1
    @name = new_name
    @account_number = random_account_number
    #I could also just call reset_account_number here ^^^
  end

  def reset_account_number
    @account_number = random_account_number
  end



  def name
    @name
  end

  def set_name_to_graham
    # local_variable = "sdfkjhkjshdf"
    #we need self here
    self.name = "Graham"
  end

  def backwards_name
    @name.reverse
  end

  def self.all
    @@all
  end

  def self.all_millionaires
    all.select do |bank_account|
      bank_account.balance >= 1000000
    end
  end


  private
    def random_account_number
      rand(1000000000..9999999999)
    end

end

