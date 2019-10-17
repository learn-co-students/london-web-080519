import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../adapters/API'

const PostIndex = props => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    API.getPosts().then(posts => setPosts(posts))
  }, [])

  return (
    <Card.Group centered>
      {posts.map(post => (
        <Card as={Link} to={`/posts/${post.id}`} key={post.id}>
          <Card.Header>{post.title}</Card.Header>
        </Card>
      ))}
    </Card.Group>
  )
}

export default PostIndex
