class ApplicationController < ActionController::Base

    before_action :define_logged_in_user

    private
    def define_logged_in_user
        #byebug
        if(session[:signed_in_user_id])
            @logged_in_user = User.find(session[:signed_in_user_id])
        else
            @logged_in_user = User.new
            @logged_in_user.name = 'Guest'
        end
    end

end
