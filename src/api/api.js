import axios from "axios";

// Django rest api url in localhost
const ROOT_URL = "http://localhost:8000/api/v1/";

// Museum and artifact urls
// GET
const MUSEUM_URL = `${ROOT_URL}museum/`;
const ARTIFACT_URL = `${ROOT_URL}artifact/`;
const MONUMENT_URL = `${ROOT_URL}monument/`;

// Auth urls
const LOGIN_USER_URL = `${ROOT_URL}rest-auth/login/`;
const REGISTRATION_USER_URL = `${ROOT_URL}rest-auth/registration/`;

// Star urls
const STAR_URL = `${ROOT_URL}star/`;

export default {
  getListMuseum() {
    return axios.get(MUSEUM_URL);
  },
  getListArtifact() {
    return axios.get(ARTIFACT_URL);
  },
  getListMonument() {
    return axios.get(MONUMENT_URL);
  },
  getSearchListMuseum(param) {
    let searchURL = `${MUSEUM_URL}?search=${param}`;
    return axios.get(searchURL);
  },
  getSearchListArtifact(param) {
    let searchURL = `${ARTIFACT_URL}?search=${param}`;
    return axios.get(searchURL);
  },
  getSearchListMonument(param) {
    let searchURL = `${MONUMENT_URL}?search=${param}`;
    return axios.get(searchURL);
  },
  postLoginCredentials(username, password) {
    return axios.post(LOGIN_USER_URL, {
      username: username,
      password: password
    });
  },
  postArtifact(token, userPk, data) {
    const axiosInstanceArtifact = axios.create({
      baseURL: ARTIFACT_URL,
      headers: {
        Authorization: `JWT ${token}`,
        "content-type": "multipart/form-data"
      }
    });
    return axiosInstanceArtifact({
      method: "post",
      url: ARTIFACT_URL,
      data: data
    });
  },
  postUserRegistration(username, email, password1, password2) {
    let data = {
      username: username,
      email: email,
      password1: password1,
      password2: password2
    };
    return axios.post(REGISTRATION_USER_URL, data);
  },
  postStar(comment, userPk, museumPk) {
    let data = {
      comment: comment,
      voter: userPk,
      museum: museumPk
    };
    return axios.post(STAR_URL, data);
  }
};
