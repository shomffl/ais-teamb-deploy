class AddDetailsToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :image, :string, after: :detail
    add_column :events, :image_path, :string, after: :image
  end
end
