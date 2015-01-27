class AuthController < ApplicationController

    def callback
        @user = current_user

        if @user

         uid =request.env['omniauth.auth']['uid']
         @user.update_attribute("uid", uid)
        end

        # @user = User.find_or_create_by(auth_hash: provider_user['uid'], provider:params[:provider])

        # if provider_user['info'] && provider_user['info']['name']
        #     @user.name=provider_user['info']['name']
        #     @user.save
        # end
        # render json: uid
        redirect_to @user
    end

    def failure
        flash[:danger] = "An error occured - please try to upload your photo again"
        redirect_to @user
    end

end
