class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :email_verify, null: false
      t.string :phone, null: false
      t.string :phone_verify, default: nil
      t.string :phone_provider, null: false
      t.string :prefered_contact, default: nil
      t.string :password_digest, null: false
      t.integer :check_day_of_month, null: false
      t.timestamps
    end
  end
end
