puts 'start seed process'

puts 'destroying posts'
Post.destroy_all

posts = [
  {title: 'elephants', author: 'me'},
  {title: 'kangaroos', author: 'me'},
  {title: 'quokkas', author: 'me'}
]

Post.create posts
puts 'new posts created'
puts 'end seed process'
