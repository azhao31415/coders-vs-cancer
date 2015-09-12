class CreateInvites < ActiveRecord::Migration
  def change
    create_table :invites do |t|
      t.string :email, null: false
      t.string :message, default: nil
      t.integer :group_id, null: false
      t.timestamps
    end
  end
end
