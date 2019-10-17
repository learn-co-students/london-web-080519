const API_ENDPOINT = 'http://localhost:3000/api/v1'
const POSTS_URL = `${API_ENDPOINT}/posts`
const LOGIN_URL = `${API_ENDPOINT}/login`
const VALIDATE_URL = `${API_ENDPOINT}/validate`

const jsonHeaders = (more = {}) => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  ...more
})
const authHeader = (more = {}) => ({
  Authorisation: localStorage.getItem('token'),
  ...more
})

const handleError = () => {
  console.error('something went wrong')
}

const handleServerResponse = res => {
  if (res.ok) {
    return res.text().then(text => {
      try {
        return JSON.parse(text)
      } catch (error) {
        return { staticPageContent: text }
      }
    })
  } else if (res.status === 503) {
    return { code: 503 }
  } else if (res.status === 500) {
    return { code: 500, error: 'Something went wrong' }
  } else {
    return res.text().then(text => {
      try {
        return JSON.parse(text)
      } catch (error) {
        return res
      }
    })
  }
}

const getPosts = () => fetch(POSTS_URL).then(handleServerResponse)
const getPost = id => fetch(`${POSTS_URL}/${id}`).then(handleServerResponse)

const login = userDetails =>
  fetch(LOGIN_URL, {
    method: 'POST',
    headers: jsonHeaders(),
    body: JSON.stringify({ user: userDetails })
  })
    .then(handleServerResponse)
    .then(userDetails => {
      if (userDetails.token) {
        localStorage.setItem('token', userDetails.token)
      }
      return userDetails.user
    })
    .catch(handleError)

const validateUser = () =>
  fetch(VALIDATE_URL, {
    method: 'POST',
    headers: authHeader()
  })
    .then(handleServerResponse)
    .then(userDetails => {
      if (!userDetails) {
        return { errors: ['something went wrong '] }
      }
      if (userDetails.token) {
        localStorage.setItem('token', userDetails.token)
      }
      return userDetails.user || userDetails
    })
    .catch(handleError)

const postPost = post =>
  fetch(POSTS_URL, {
    method: 'POST',
    headers: jsonHeaders(authHeader()),
    body: JSON.stringify({ post })
  })
    .then(handleServerResponse)
    .catch(handleError)

const logout = () => {
  localStorage.removeItem('token')
}
export default {
  getPosts,
  login,
  validateUser,
  getPost,
  postPost,
  logout
}
