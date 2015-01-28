class PaymentsController < ApplicationController
	def index
	  @payments = Venmo.authenticate params[:code]

	  # if @payments
	    # @info = @payments.get_info
	  #   @friends = @payments.get_friends
	  #   @other_user = @payments.get_user 145434160922624933
	  #   @other_user_client = Venmo.get_user 145434160922624933, @payments.access_token

	  #   @payment = @payments.make_payment ({ :note => 'A message to accompany the payment.', :amount => '0.10', :user_id => 145434160922624933 })

	  #   @payment2 = @payments.get_payment 1513344862190043372
	  #   @payment2_client = Venmo.get_payment 1513344862190043372, @payments.access_token

	  #   @recent_payments = @payments.get_recent_payments
	  #   @recent_payments_client = Venmo.get_recent_payments @payments.access_token
	  # end

	  # puts "\n\n\n\n"

	  # p @payments

	  # puts "\n\n\n\n"
	  render json: @payments
	  # redirect_to '/'
	end
end