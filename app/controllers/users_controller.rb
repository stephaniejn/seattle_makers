class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.errors.any?
      render :new
    else
      flash[:success] = "Added User"
      redirect_to login_path
      # WHEN COMBINED redirect_to :login
    end
  end

  def other_user_profile
    @user = User.find(params[:id])
    # @userevents = @user.user_events
  end

  def show
    if is_authenticated?
    @user = User.find(params[:id])
      if @current_user.id != @user.id
      # render json: @user.id
      # flash[:danger] = "This is a private page"
      redirect_to profile_path
    else
      render @users
      end
    end
  end

  def edit
    is_authenticated?
    @user = User.find(params[:id])
  end

  def update
    is_authenticated?
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.errors.any?
      flash[:danger] = "There was an error in your edit - please try again"
      render :edit
    else
      flash[:success] = "Updated"
      redirect_to @user
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

end
