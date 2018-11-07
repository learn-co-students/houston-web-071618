class PandasController < ApplicationController

    skip_before_action :check_authentication, only: [ :create ]

    def create
        panda = Panda.create(panda_params)
        render json: { 
            panda: panda, 
            jwt: encode_token({ panda_id: panda.id }) 
        }, include: [ :foods ]
    end
    
    def index
        render json: Panda.all
    end
    
    def show
        panda = Panda.find(params[:id])
        render json: panda
    end
    
    def update
        panda = Panda.find(params[:id])
        panda.update(panda_params)
        render json: panda
    end
    
    def destroy
        panda = Panda.find(params[:id])
        panda.destroy
        render json: panda
    end
    
    def panda_params
        params.permit(:username, :password)
    end


end
