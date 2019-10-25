import React from 'react'
import { Form } from 'semantic-ui-react'
import API from '../adapters/API'

class NewPostForm extends React.Component {
  state = {
    title: '',
    content: ''
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  submit = e => {
    e.preventDefault()
    API.postPost({ title: this.state.title, content: this.state.content }).then(
      post => this.props.history.push('/posts/' + post.id)
    )
  }

  render() {
    return (
      <Form
        onSubmit={this.submit}
        onChange={e => this.handleInputChange(e.target.name, e.target.value)}
      >
        <Form.Input
          name="title"
          type="text"
          placeholder="title"
          autocomplete="title"
          value={this.state.title}
        />
        <Form.Input
          name="content"
          type="text"
          placeholder="content"
          autocomplete="content"
          value={this.state.content}
        />
        <Form.Button>Create post</Form.Button>
      </Form>
    )
  }
}

export default NewPostForm
