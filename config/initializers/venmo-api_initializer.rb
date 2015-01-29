Rails.application.config.before_initialize do

	#force venmo sandbox for testing
	# VenmoAPI::Helper::VENMO_BASE_URL = "https://sandbox-api.venmo.com/v1/"

  ::Venmo = VenmoAPI::Client.new do |config|
    config.client_id = ENV['VENMO_API_CLIENT'].to_i
    config.secret = ENV['VENMO_API_SECRET']
    config.scope = ['make_payments', 'access_profile', 'access_email']
    config.response_type = 'code'
  end
end