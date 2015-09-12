class User < ActiveRecord::Base
  has_secure_password
  
  has_many :user_groups
  has_many :groups, through: :user_groups
  has_many :checks
  has_many :invites

  def gravatar(size = 200)
    default_url = "http://i60.tinypic.com/27yoagy.png"
    gravatar_id = Digest::MD5::hexdigest(self.email.downcase)
    "http://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size.to_s}"
  end
end
