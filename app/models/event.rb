class Event < ActiveRecord::Base

  belongs_to :category
  belongs_to :user

	has_and_belongs_to_many :attending, class_name: "User", join_table: "attends"
	has_and_belongs_to_many :votes, class_name: "User", join_table: "votes"

  validates :title,
    presence: true,
    length: {maximum: 30}

  validates :desc,
    presence: true,
    length: {maximum: 250}

  validates :capacity,
    presence: true,
    :numericality => { :greater_than => 0}

  validates_presence_of :category_id, :date, :time, :address, :city, :state

  validates :donation, inclusion: [true, false]

end
