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
	end

# THERE WERE TWO ATTEND METHODS. THE ONE AT BOTTOM OF PAGE WORKS NOW. DELETE THIS ONE ONCE 100% SURE.

	# def attend
	# 	@event = Event.find_by_id(params[:id])
	# 	User.find_by_id(@current_user.id).attending << @event
 #    # Ticket.find_by_user_id(@current_user.id).delete
 #    User.find_by_id(@current_user.id).tickets.last.destroy
	# 	# render json: params
	# 	redirect_to event_path(@event)
	# end

  def edit
  	is_authenticated?
    @event = Event.find(params[:id])
    @categories = Category.all
  end

  def update
    is_authenticated?
    @categories = Category.all
    @event = Event.find(params[:id])
    @event.update(event_params)
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
    @user = current_user
    @event = @user.events.create(event_params)

    # Cloudinary::Uploader.upload(params[:image_id])

    if @event.errors.any?
      flash[:danger] = "There was an error in your creation - please try again"
      render :edit
    else
      params[:image_id].present?
      preloaded = Cloudinary::PreloadedFile.new(params[:image_id])
     # Verify signature by calling preloaded.valid?
      @event.image_id = preloaded.identifier
      flash[:success] = "Created"
      render json: params
      # redirect_to @event
    end
  end

  def discover
    @event = Event.all
    @category = Category.all
  end

  def category
    @category = Category.find_by_id(params[:id])
    @event = Event.where(category_id: params[:id])
  end

  def attend
    @event = Event.find_by_id(params[:id])
    User.find_by_id(@current_user.id).attending << @event
    Ticket.find_by_user_id(@current_user.id).delete
    redirect_to event_path(@event)
  end

  private
  def event_params
    params.require(:event).permit(:title, :desc, :capacity, :donation, :category_id, :date, :time, :address, :city, :state, :image_id)
  end

end