import React, { useState, useEffect } from 'react'
import { Card, Placeholder, Message } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'
import API from '../adapters/API'

const PostShow = props => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    API.getPost(id).then(post => setPost(post))
  }, [])

  if (!post)
    return (
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    )

  return <Message></Message>
}

export default PostShow
