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
		@user = current_user
		@event = @user.events.create(post_params)
		# @user = User.authenticate(params[:user][:email], params[:user][:password])
		# render json: @event


		if @event
		  flash[:success] = "Event Saved!"
		  redirect_to root_path
		else
		  flash[:danger] = "Event Not Yet Saved"
		  redirect_to edit_event_path
		end

	end

	private
  def event_params
    params.require(:event).permit(:title, :desc, :capacity, :donation)
  end

  def post_params
  	params.require(:event).permit(:title,:desc,:capacity,:category_id)
  end

end