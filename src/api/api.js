import axios from 'axios'

// Django rest api url in localhost
const ROOT_URL = 'http://localhost:8000/api/v1/';

// Museum and artifact urls
const MUSEUM_LIST_URL = `${ROOT_URL}museum/`;
const ARTIFACT_LIST_URL = `${ROOT_URL}artifact/`;

export default {

    getListMuseum() {
        return axios.get(MUSEUM_LIST_URL)
    },
    getListArtifact() {
        return axios.get(ARTIFACT_LIST_URL)
    }

}
