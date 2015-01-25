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
      redirect_to "/signup"
      # WHEN COMBINED redirect_to :login
    end
  end

   def other_user_profile
    @user = User.find(params[:id])
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

   def update
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
