class EventsController < ApplicationController

	def new
		@event = Event.new
	end

	def show
		@event = Event.all
	end

	def edit
		@event = Event.all
	end

	def create
		@event = Event.create(params.require(:event).permit(:title,:desc,:capacity))
	end

	def discover
		@event = Event.all
		@category = Category.all
	end

	def category
		@category = Category.find_by_id(params[:id])
		@event = Event.where(category_id: params[:id])
	end

end