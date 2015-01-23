class User < ActiveRecord::Base

	has_many :tickets
	has_many :events

	has_and_belongs_to_many :attending, class_name: "Event", join_table: "attends"
	has_and_belongs_to_many :votes, class_name: "Event", join_table: "votes"

end
