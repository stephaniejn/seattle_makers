Cloudinary.config do |config|
  # config.cloud_name = 'drxybow0v'
  config.cloud_name = 'seattle-makers'
  config.api_key = ENV['CLOUDINARY_KEY']
  config.api_secret = ENV['CLOUDINARY_SECRET']
end