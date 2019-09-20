function get(url) {
  return fetch(url).then(data => data.json());
}

function post(url, objToPost) {
  const configObject = {
    method: "POST",
    body: JSON.stringify(objToPost),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(url, configObject).then(data => data.json());
}

function put(url, id, objToUpdate) {
  const configObject = {
    method: "PUT",
    body: JSON.stringify(objToUpdate),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(`${url}/${id}`, configObject).then(data => data.json());
}

function patch(url, id, objToUpdate) {
  const configObject = {
    method: "PATCH",
    body: JSON.stringify(objToUpdate),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(`${url}/${id}`, configObject).then(data => data.json());
}

function destroy(url, id) {
  const configObject = {
    method: "DELETE"
  };
  return fetch(`${url}/${id}`, configObject).then(data => data.json());
}

const config = {
  BASE_URL: "http://localhost:3000/posts"
};

const api = {
  get,
  post,
  put,
  patch,
  destroy,
  config
};
