class User < ActiveRecord::Base

  has_secure_password

	has_many :tickets
	has_many :events

	has_and_belongs_to_many :attending, class_name: "Event", join_table: "attends"
	has_and_belongs_to_many :votes, class_name: "Event", join_table: "votes"

  validates :email,
    presence: true,
    uniqueness: {case_sensitive: false},
    format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

  validates :password, presence: true, length: { minimum: 6 }, on: :create

  validates_confirmation_of :password, on: :create
  validates_presence_of :password_confirmation, on: :create

  validates :name,
    presence: true,
    length: {maximum: 25}

  def self.authenticate email, password
    User.find_by_email(email).try(:authenticate, password)
  end

end
