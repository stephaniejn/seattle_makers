class PaymentsController < ApplicationController

	#POST route from form on user/event page
	def make_payment
	  #  &state=4_3.
	  #  url = Venmo.auth_link + "&state=" + params[:user_id] + "_" + params[:donate_amount]
	  #  redirect_to url
	end

	#callback from venmo
	def index
	  @venmo_user = Venmo.authenticate params[:code]

	  #state = params[:state].split("_")
	  # state[0]   state[1]
	  #to_email = User.find_by_id(state[0])
	  #payment = @venmo_user.make_payment ({:email=>to_email, :note => 'A message to accompany the payment.', :amount => state[1]})

	  #render json: payment




	  # if @venmo_user_data
	    # @info = @venmo_user_data.get_info
	  #   @friends = @venmo_user_data.get_friends
	  #   @other_user = @venmo_user_data.get_user 145434160922624933
	  #   @other_user_client = Venmo.get_user 145434160922624933, @venmo_user_data.access_token

	  #   @payment = @venmo_user_data.make_payment ({ :note => 'A message to accompany the payment.', :amount => '0.10', :user_id => 145434160922624933 })

	  #   @payment2 = @venmo_user_data.get_payment 1513344862190043372
	  #   @payment2_client = Venmo.get_payment 1513344862190043372, @venmo_user_data.access_token

	  #   @recent_payments = @venmo_user_data.get_recent_payments
	  #   @recent_payments_client = Venmo.get_recent_payments @venmo_user_data.access_token
	  # end

	  # puts "\n\n\n\n"

	  # p @venmo_user_data

	  # puts "\n\n\n\n"
	  # @current_user.venmo_user_data = @payments.access_token
	  # @current_user.save
	  # render json: @current_user
	  render json: {venmo_user:@venmo_user, params:params}
	  # redirect_to '/'
	end
end