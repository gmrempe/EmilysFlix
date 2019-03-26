class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.index :session_token, unique: true
      t.index :email, unique: true

      t.timestamps
    end
  end
end
