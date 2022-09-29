class AddSlugToAnimesAndStatuses < ActiveRecord::Migration[7.0]
  def change
    add_column :animes, :slug, :string
    add_column :statuses, :slug, :string
  end
end
