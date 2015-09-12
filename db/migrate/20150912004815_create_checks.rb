class CreateChecks < ActiveRecord::Migration
  def change
    create_table :checks do |t|
      t.string :status, default: "unfufilled"
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
