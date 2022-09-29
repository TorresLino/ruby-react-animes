class AddAnimeAssociationToStatus < ActiveRecord::Migration[7.0]
  def change
    add_reference :animes, :status, foreign_key: true
  end
end
