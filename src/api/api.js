import axios from 'axios'

// Django rest api url in localhost
const ROOT_URL = 'http://localhost:8000/api/v1/';

// Museum and artifact urls
// GET 
const MUSEUM_LIST_URL = `${ROOT_URL}museum/`;
const ARTIFACT_LIST_URL = `${ROOT_URL}artifact/`;

// Auth urls
const LOGIN_USER_URL = `${ROOT_URL}rest-auth/login/`

export default {
  getListMuseum() {
    return axios.get(MUSEUM_LIST_URL)
  },
  getListArtifact() {
    return axios.get(ARTIFACT_LIST_URL)
  },
  postLoginCredentials(username, password) {
    return axios.post(LOGIN_USER_URL, {
      username: username,
      password: password
    })
  },
  postArtifact(token) {
    return axios
      .post(
      ARTIFACT_LIST_URL, 
  )}
}
