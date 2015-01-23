class Event < ActiveRecord::Base

  belongs_to :category
  belongs_to :user

	has_and_belongs_to_many :attending, class_name: "User", join_table: "attends"
	has_and_belongs_to_many :votes, class_name: "User", join_table: "votes"

end
