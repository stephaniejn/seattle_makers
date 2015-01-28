Rails.application.config.before_initialize do
  ::Venmo = VenmoAPI::Client.new do |config|
    config.client_id = ENV['VENMO_API_CLIENT']
    config.secret = ENV['VENMO_API_SECRET']
    config.scope = ['make_payments', 'access_feed', 'access_profile', 'access_email', 'access_phone', 'access_balance', 'access_friends']
    config.response_type = 'code'
  end
end