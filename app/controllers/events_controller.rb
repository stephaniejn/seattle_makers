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

end