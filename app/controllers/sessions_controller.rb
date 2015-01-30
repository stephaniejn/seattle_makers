class SessionsController < ApplicationController

  def index
    @user = current_user
  end

  def new
    @user = current_user
  end

  def create
    @user = User.authenticate(params[:user][:email], params[:user][:password])

    if @user
      session[:user_id] = @user.id
      redirect_to root_path
    else
      flash[:danger] = "Credentials Invalid!"
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "User logged out"
    redirect_to root_path
  end

end