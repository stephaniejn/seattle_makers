
class SitesController < ApplicationController

  def index
    @user = current_user
    @user = User.new
    @event = Event.all
    @category = Category.all
    @trending = @event.map do |e|
      e.attending.count.to_f / e.capacity
    end
    @counts = @event.map do |e|
      e.id
    end

    @trending_arr = Hash[@counts.zip(@trending)].sort_by{ |counts, trending| trending }.reverse
    # #  - e.attending.count
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