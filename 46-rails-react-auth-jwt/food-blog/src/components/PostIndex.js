import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PostIndex = ({ posts }) => {
  return (
    <Card.Group>
      {posts.map(post => (
        <Card as={Link} to={`/posts/${post.id}`} key={post.id}>
          <Card.Header>{post.title}</Card.Header>
        </Card>
      ))}
    </Card.Group>
  )
}

export default PostIndex
