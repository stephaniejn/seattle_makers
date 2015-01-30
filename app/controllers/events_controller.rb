class EventsController < ApplicationController

	def new
		is_authenticated?
		@event = Event.new
		@categories = Category.all
	end

	def show
		@event = Event.find_by_id(params[:id])
		@attendees = Attend.all
		@user = User.find_by_id(params[:id])
    image = Event.find_by_id(params[:id]).image_id
    if image != nil
      @event_pic = image
    end
	end

  def edit
  	is_authenticated?
    @event = Event.find(params[:id])
    @categories = Category.all
  end

  def update
    is_authenticated?
    @categories = Category.all
    @event = Event.find(params[:id])
    # @event.update(event_params)
    result = capture_image params[:event][:image_id]
    @event.update({image_id: result, title: params[:event][:title],
                          desc: params[:event][:desc], capacity: params[:event][:capacity],
                          donation: params[:event][:donation], category_id: params[:event][:category_id],
                          date: params[:event][:date], time: params[:event][:time],
                          address: params[:event][:address], city: params[:event][:city],
                          state: params[:event][:state]})


    if @event.errors.any?
      flash[:danger] = "There was an error in your edit - please try again"
      render :edit
    else
      flash[:success] = "Updated"
      redirect_to @event
    end
  end

  def create
    is_authenticated?
    @categories = Category.all
    result = capture_image params[:event][:image_id]

    @event = @current_user.events.create({image_id: result, title: params[:event][:title],
                          desc: params[:event][:desc], capacity: params[:event][:capacity],
                          donation: params[:event][:donation], category_id: params[:event][:category_id],
                          date: params[:event][:date], time: params[:event][:time],
                          address: params[:event][:address], city: params[:event][:city],
                          state: params[:event][:state]})
    if @event.errors.any?
      flash[:danger] = "There was an error in your creation - please try again"
      render :edit
    else
      flash[:success] = "Created"
      redirect_to @event
    end
  end

  def discover
    @event = Event.all
    @category = Category.all
    @user = current_user
    @user = User.new

    @trending = @event.map do |e|
     e.attending.count.to_f / e.capacity
    end

    @counts = @event.map do |e|
      e.id
    end

    @trending_arr = Hash[@counts.zip(@trending)].sort_by{ |counts, trending| trending }.reverse

  end

  def category
    @category = Category.find_by_id(params[:id])
    @event = Event.where(category_id: params[:id])
  end

  def attend
    @event = Event.find_by_id(params[:id])
    User.find_by_id(@current_user.id).attending << @event
    Ticket.find_by_user_id(@current_user.id).delete
    @ticket = User.find_by_id(@current_user.id).tickets.count
    ticket = @ticket

    respond_to do |format|
      format.json {render json: ticket}
      format.html {redirect_to event_path(@event)}
    end
  end

  def un_attend
    @event = Event.find_by_id(params[:id])
    User.find_by_id(@current_user.id).tickets << Ticket.create()
    Attend.find_by_user_id(@current_user.id).delete
    @ticket = User.find_by_id(@current_user.id).tickets.count
    ticket = @ticket

    respond_to do |format|
      format.json {render json: ticket}
      format.html {redirect_to event_path(@event)}
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :desc, :capacity, :donation, :category_id, :date, :time, :address, :city, :state)
  end

end