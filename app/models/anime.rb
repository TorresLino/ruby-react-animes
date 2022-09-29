class Anime < ApplicationRecord
    belongs_to :status, class_name: 'Status', foreign_key: 'status_id'

    before_create :slugify

    def slugify
        self.slug = title.parameterize
    end
end
