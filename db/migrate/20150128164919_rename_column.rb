class RenameColumn < ActiveRecord::Migration
  def change
    rename_column :events, :url, :event_picture
  end
end
