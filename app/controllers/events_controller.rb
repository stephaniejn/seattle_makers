class EventsController < ApplicationController

	def new
		is_authenticated?
		@event = Event.new
		@categories = Category.all
	end

	def show
		@event = Event.find_by_id(params[:id])
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
		# @user = User.authenticate(params[:user][:email], params[:user][:password])
		# render json: @event
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
	end

	def category
		@category = Category.find_by_id(params[:id])
		@event = Event.where(category_id: params[:id])
	end

	private
  def event_params
    params.require(:event).permit(:title, :desc, :capacity, :donation, :category_id, :date, :time, :address, :city, :state)
  end

end