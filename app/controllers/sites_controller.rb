
class SitesController < ApplicationController

  def index
    @user = current_user
    @user = User.new
  end


  def about
    @user = current_user
    @user = User.new
  end

private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

end