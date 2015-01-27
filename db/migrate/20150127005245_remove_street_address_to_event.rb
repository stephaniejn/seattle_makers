class RemoveStreetAddressToEvent < ActiveRecord::Migration
  def change
    remove_column :events, :street_address, :string
  end
end
