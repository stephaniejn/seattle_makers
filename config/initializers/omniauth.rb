Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['FACEBOOK_KEY'].to_i, ENV['FACEBOOK_SECRET']
end