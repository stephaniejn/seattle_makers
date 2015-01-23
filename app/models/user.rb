class User < ActiveRecord::Base

	has_many :events
	# has_and_belongs_to_many :events, join_table: "attends"
	# has_many :attends
	# has_many :attending, through: :attends, source: "Event"
	has_many :attending, class_name: "Event", join_table: "events"
	has_many :votes, class_name: "Vote", join_table: "votes"

	# has_many :events, through: :attends, as: :attending
	# belongs_to :events, inverse_of: :attending
	# has_many :events, through: :votes, as: :votes
	has_many :tickets

end
