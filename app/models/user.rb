class User < ActiveRecord::Base

	# has_many :events
	# has_and_belongs_to_many :events, join_table: "attends"
	# has_many :events, through: :attends, as: :attending
	has_many :events, through: :attends
	# belongs_to :events, inverse_of: :attending
	# has_many :events, through: :votes, as: :votes
	has_many :tickets

end
