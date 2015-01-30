
class SitesController < ApplicationController

  def index
    # @current_user
    @user = current_user
    @user = User.new
  end


  def about

  end

private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

end