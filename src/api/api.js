import axios from 'axios'


// Django rest api url in localhost
const ROOT_URL = 'http://localhost:8000/api/v1/';

// Museum and artifact urls
// GET 
const MUSEUM_URL = `${ROOT_URL}museum/`;
const ARTIFACT_URL = `${ROOT_URL}artifact/`;

// Auth urls
const LOGIN_USER_URL = `${ROOT_URL}rest-auth/login/`;
const REGISTRATION_USER_URL = `${ROOT_URL}rest-auth/registration/`;

export default {
  getListMuseum() {
    return axios.get(MUSEUM_URL)
  },
  getListArtifact() {
    return axios.get(ARTIFACT_URL)
  },
  postLoginCredentials(username, password) {
    return axios.post(
      LOGIN_USER_URL,
      {
        username: username,
        password: password
      }
    )
  },
  postArtifact(token, userPk, data) {
    const axiosInstanceArtifact = axios.create({
      baseURL: ARTIFACT_URL,
      headers: {
        Authorization: `JWT ${token}`,
        'content-type': 'multipart/form-data' 
      }
    });
    return axiosInstanceArtifact({
      method: "post",
      url: ARTIFACT_URL,
      data: data
    })
  },
  postUserRegistration(username, email, password1, password2) {
    let data = {
        username: username,
        email: email,
        password1: password1,
        password2: password2
    }
    return axios.post(
      REGISTRATION_USER_URL,
      data
    )
  }
}
