class RenameColumn2 < ActiveRecord::Migration
  def change
    rename_column :events, :event_picture, :image_id
  end
end
