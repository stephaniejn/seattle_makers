Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['FACEBOOK_KEY'].to_i, ENV['FACEBOOK_SECRET']
  # env = ENV['RAILS_ENV'] || 'development'
  # if env=='production'
  #   OmniAuth.config.full_host = 'https://seattletradingpost.herokuapp.com/auth/facebook/callback'
  # end
end