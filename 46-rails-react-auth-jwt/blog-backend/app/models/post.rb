class Post < ApplicationRecord
  belongs_to :user

  def self.all_summaries
    Post.all.map{|post| PostSummarySerializer.new(post)}
  end
end
