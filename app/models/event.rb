class Event < ActiveRecord::Base

  belongs_to :category
  belongs_to :user
  has_many :votes
  has_many :attends

end
