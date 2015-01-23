class CreateAttends < ActiveRecord::Migration
  def change
    create_table :attends do |t|
      t.references :user, index: true
      t.references :event, index: true

      t.timestamps null: false
    end
    add_foreign_key :attends, :users
    add_foreign_key :attends, :events
  end
end
