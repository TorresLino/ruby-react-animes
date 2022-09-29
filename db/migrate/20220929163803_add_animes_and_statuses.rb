class AddAnimesAndStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.string :title
      t.text :description
      t.integer :episodes
      t.integer :episodeDuration
      t.decimal :rating
      t.date :premiered
    end

    create_table :statuses do |t|
      t.string :name
    end
  end
end
