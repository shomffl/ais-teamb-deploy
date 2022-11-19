class RemoveDetailsFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :image_path, :string
    remove_column :events, :image, :string
  end
end
