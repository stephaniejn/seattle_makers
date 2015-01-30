class PaymentsController < ApplicationController

	#POST route from form on user/event page
	def make_payment
	  url = Venmo.auth_link + "&state=" + params[:payment][:user] + "_" + params[:payment][:amount] + "_" + params[:payment][:event]
		redirect_to url.gsub(/\s/,"+")
	end

	#Callback from venmo
	def venmo_callback
		puts "@"*99
	  @venmo_user = Venmo.authenticate params[:code]
	  if params[:state]
		  state = params[:state].split("_")
		  #state[0] = user id ...  state[1] = payment amount ... state[2] = event id
		  if(@venmo_user)
			  to_user = User.find_by_id(state[0])
			  to_email = to_user.email
			  payment = @venmo_user.make_payment ({:email=>to_email, :note => 'Donation for your event on Seattle Trading Post!', :amount => state[1]})
			  # binding.pry
			  # puts payment.inspect
			  # render json: {venmo_user:@venmo_user, params:params, payment: payment, a}

			  if payment.data && payment.data[:payment] && payment.data[:payment][:status] == "settled"
			  	flash[:success] = "Your payment has been sent."
			  else
			  	flash[:error] = "We were unable to process your payment."
			  end
				else
					flash[:error] = "Couldnt find the user... Token probably expired."
				end
				redirect_to event_path(state[2])
			else
					flash[:error] = "Invalid state data."
					redirect_to root_path
			end

	end
end