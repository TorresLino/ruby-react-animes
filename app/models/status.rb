class Status < ApplicationRecord
    has_many :animes, inverse_of: 'status'

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end
end
