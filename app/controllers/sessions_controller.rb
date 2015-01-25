class SessionsController < ApplicationController

  def index
    @user = current_user
  end

  def new
  end

  def create
    @user = User.authenticate(params[:user][:email], params[:user][:password])
    # render json: @user

    if @user
      session[:user_id] = @user.id
      flash[:success] = "You have just logged in"
      # redirect_to root_path
      redirect_to login_path
    else
      flash[:danger] = "Credentials Invalid!"
      redirect_to login_path
    end
  end

  def destroy
    if @user
      session[:user_id] = nil
      flash[:success] = "User logged out"
      redirect_to login_path
    else
      flash[:danger] = "Already logged out"
      redirect_to login_path
    end
  end

end