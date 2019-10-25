class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  belongs_to :user

  def author_email
    self.object.user.email
  end
end
