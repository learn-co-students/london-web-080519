import Home from '../components/Home'
import PostIndex from '../components/PostIndex'
import PostShow from '../components/PostShow'
import LoginForm from '../components/LoginForm'
import NewPostForm from '../components/NewPostForm'

export const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home
  },
  {
    title: 'All posts',
    path: '/posts',
    component: PostIndex
  },
  {
    title: 'Post show',
    path: '/posts/:id',
    component: PostShow,
    exact: true
  },
  {
    title: 'New post',
    path: '/posts/new',
    component: NewPostForm
  },
  {
    title: 'Log in',
    path: '/login',
    component: LoginForm
  },
  {
    title: 'Sign up',
    path: '/signup'
  },
  {
    title: 'Log out',
    path: '/logout',
    component: props => {
      props.logout()

      return null
    }
  }
]
