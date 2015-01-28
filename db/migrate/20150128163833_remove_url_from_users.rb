class RemoveUrlFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :url, :string
  end
end
