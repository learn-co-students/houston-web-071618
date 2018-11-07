class AuthController < ApplicationController
    skip_before_action :check_authentication, only: [:create]

    def create
      panda = Panda.find_by(username: params[:username])
      if panda && panda.authenticate(params[:password])
        render json: {
          panda: panda,
          jwt: encode_token({ panda_id: panda.id })
        }, include: [ :foods ]
      else
        render json: {
          error: "Username or password are incorrect"
        }
      end
    end

end
