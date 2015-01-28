class AuthController < ApplicationController

  def callback
    @user = current_user

    if @user
      uid =request.env['omniauth.auth']['uid']
      @user.update_attribute("uid", uid)
    end

    redirect_to @user

  end

  def failure
    flash[:danger] = "An error occured - please try to upload your photo again"
    redirect_to @user
  end

end