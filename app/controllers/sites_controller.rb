
class SitesController < ApplicationController

  def index
    # @current_user
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

  end

end