# frozen_string_literal: true

class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :company_id
      t.string :name
      t.text :detail
      t.text :image_path

      t.timestamps
    end
  end
end
