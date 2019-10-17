class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :posts
  
  def posts
    self.object.posts.map do |post|
      PostSummarySerializer.new(post)
    end
  end
end
