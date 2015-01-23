class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.references :category, index: true
      t.references :user, index: true
      t.string :title
      t.text :desc
      t.integer :capacity
      t.boolean :donation

      t.timestamps null: false
    end
    add_foreign_key :events, :categories
    add_foreign_key :events, :users
  end
end
