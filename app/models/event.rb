class Event < ActiveRecord::Base

  belongs_to :category
  belongs_to :user

	has_and_belongs_to_many :attending, class_name: "User", join_table: "attends"
	has_and_belongs_to_many :votes, class_name: "User", join_table: "votes"

  validates :title,
    presence: true,
    uniqueness: {case_sensitive: false, message: '- Please be more specific' },
    length: {maximum: 30}

  validates :desc,
    presence: true,
    length: {maximum: 250}

  validates :capacity,
    presence: true,
    :numericality => { :greater_than => 0}

  validates :date,
    presence: true,
    date: { after: Proc.new { Date.today }, message: 'must be after today' }


  validates :date,
    date: { before: Proc.new { Date.today + 1.year }, message: 'must be within the year' }

  validates_presence_of :category_id, :time, :address, :city, :state

  validates :donation, inclusion: [true, false]

end
